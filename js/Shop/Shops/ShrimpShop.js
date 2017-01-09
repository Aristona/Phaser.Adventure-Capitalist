class ShrimpShop extends Shop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "shrimp-shop"
        };

        this.price = 10000;

        this.profit = 3333;
        this.interval = 1000;

        super.constructor();
    }

    update() {
        super.update();
    }
}
