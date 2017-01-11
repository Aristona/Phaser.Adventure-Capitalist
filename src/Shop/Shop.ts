import { Translator } from "../Translator/Translator";

export abstract class Shop
{
    protected purchased: boolean = false;
    protected level: number = 1;

    protected readonly config: {
        distanceBetweenShops: number,
        leftSideX:  number,
        rightSideX: number
    } = {
        distanceBetweenShops: 100,
        leftSideX:  175,
        rightSideX: 530
    };

    public readonly styles = {
        font: {
            font: "14px Arial",
            fill: "#ccc"
        }
    };

    protected position: {
        x: number,
        y: number
    };

    protected button: Phaser.Button;

    protected indicators: {
        name: Phaser.Text,
        profit: Phaser.Text,
        interval: Phaser.Text,
        level: Phaser.Text,
        price: Phaser.Text,
        alert: Phaser.Text,
        alertBg: Phaser.Image,
        progressBg: Phaser.Image,
        progress: Phaser.Line
    };

    protected translator: Translator = new Translator;

    protected running: boolean = false;
    protected startedAt: number;
    protected endingAt: number;

    protected abstract asset: any;
    protected abstract price: any;
    protected abstract profit: any;
    protected abstract interval: any;
    protected abstract game: any;
    protected abstract index: any;

    constructor() {
    }

    init() {
        // @todo figure out how to do it magically since constructor cannot access this scope
        // We need 5 shops at left and 5 at right.
        if (this.index <= 4) {
            this.position = {
                x: this.config.leftSideX,
                y: (this.index + 1) * this.config.distanceBetweenShops
            };
        } else {
            this.position = {
                x: this.config.rightSideX,
                y: ((this.index % 5) + 1) * this.config.distanceBetweenShops
            };
        }

        // Add the shop button.
        this.button = this.game.add.button(this.position.x, this.position.y, this.asset.name);
        this.button.alpha = .15;
        this.button.scale.setTo(1, 1);

        this.indicators = {
            name: this.game.add.text(
                this.button.x,
                this.button.y - 16,
                this.translator.translate(this.asset.name),
                this.styles.font
            ),
            profit: this.game.add.text(
                this.button.x + 75,
                this.button.y,
                null,
                this.styles.font
            ),
            interval: this.game.add.text(
                this.button.x + 75,
                this.button.y + 15,
                null,
                this.styles.font
            ),
            level: this.game.add.text(
                this.button.x + 75,
                this.button.y + 30,
                null,
                this.styles.font
            ),
            price: this.game.add.text(
                this.button.x + 75,
                this.button.y + 45,
                null,
                this.styles.font
            ),
            alertBg: this.game.add.image(
                this.button.x,
                this.button.y + 45,
                "buy-bg"
            ),
            alert: this.game.add.text(
                this.button.x + 5,
                this.button.y + 45,
                null,
                {
                    font: "14px Arial",
                    fill: "#000"
                }
            ),
            progressBg: this.game.add.image(
                this.button.x,
                this.button.y + 69,
                "progress-bg"
            ),
            progress: new Phaser.Line(0, 0, 0, 0)
        };

        this.indicators.alertBg.scale.setTo(.6, .7);
        this.indicators.alertBg.visible = false;
        this.button.onInputDown.add(() => this.click());
    }

    click() {
        if (this.purchased === false) {
            this.purchase();
            return;
        }

        this.upgrade();
    }

    buyable() {
        return this.game.money >= this.price;
    }

    upgrade() {
        if (this.buyable() === true) {
            this.game.add.audio("buy", .6).play();
            this.game.money -= this.price;
            this.price = this.price * 2;
            this.profit = this.profit * 1.2;
            ++this.level;
            this.interval = this.interval * 1.05;
        }
    }

    purchase() {
        if (this.buyable() === true) {
            this.game.add.audio("buy", .6).play();
            this.game.money -= this.price;
            this.price = this.price * 2;
            this.purchased = true;
            this.button.alpha = 1;
            this.start();
        }
    }

    start() {
        if (this.purchased === false) {
            return;
        }

        if (this.running === true) {
            return;
        }

        this.running = true;
        this.startedAt = new Date().getTime();
        this.endingAt = this.startedAt + this.interval;

        setTimeout(() => {
            this.running = false;
            this.game.money += this.profit;
        }, this.interval);
    }

    showProgressBar() {
        let diff = this.endingAt - this.startedAt;
        let now = this.endingAt - new Date().getTime();
        let percent = (((diff - now) / diff) * 100);

        this.indicators.progress.setTo(
            this.button.x,
            this.button.y + 70,
            this.button.x + (percent * 2),
            this.button.y + 70
        );
    }

    intervalToSecond() {
        let interval = this.interval / 1000;

        if (interval >= 1) {
            return interval.toFixed(0);
        }

        return interval.toFixed(2);
    }

    update() {

        this.start();
        this.indicators.profit.text = this.translator.translate("profit", this.profit.toFixed(2));
        this.indicators.interval.text = this.translator.translate("time", this.intervalToSecond());
        this.indicators.price.text = this.translator.translate("price", this.price.toFixed(2));
        this.indicators.alert.text = this.translator.translate("buy");

        if (this.purchased === false) {
            this.indicators.level.text = this.translator.translate(
                "status",
                this.translator.translate("not-purchased")
            );
        } else {
            this.indicators.level.text = this.translator.translate("level", this.level.toString());
        }

        if (this.buyable() === true) {
            this.indicators.alert.visible = true;
            this.indicators.alertBg.visible = true;
        } else {
            this.indicators.alert.visible = false;
            this.indicators.alertBg.visible = false;
        }

        if (this.running === true) {
            this.showProgressBar();
        }
    }

    render() {
        this.game.debug.geom(this.indicators.progress, "#0fffff");
    }
}
