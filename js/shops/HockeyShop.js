class HockeyShop extends AbstractShop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "hockey-shop"
        };

        this.price = 50000;

        this.profit = 10000;
        this.interval = 2500;

        super.constructor();
    }

    update() {
        super.update();
    }
}