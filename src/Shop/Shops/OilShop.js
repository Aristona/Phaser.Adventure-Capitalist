class OilShop extends Shop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "oil-shop"
        };

        this.price = 990990990;

        this.profit = 99999999;
        this.interval = 9999;

        super.constructor();
    }

    update() {
        super.update();
    }
}
