class NewspaperShop extends Shop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "newspaper-shop"
        };

        this.price = 7.00;

        this.profit = 5.00;
        this.interval = 2000;

        super.constructor();
    }

    update() {
        super.update();
    }
}
