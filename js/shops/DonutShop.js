class DonutShop extends AbstractShop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "donut-shop"
        };

        this.price = 3000;

        this.profit = 1250;
        this.interval = 1250;

        super.constructor();
    }

    update() {
        super.update();
    }
}