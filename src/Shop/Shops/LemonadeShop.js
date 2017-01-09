class LemonadeShop extends Shop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "lemonade-shop"
        };

        this.price = 1.75;

        this.profit = 1;
        this.interval = 3000;

        super.constructor();
    }

    update() {
        super.update();
    }
}
