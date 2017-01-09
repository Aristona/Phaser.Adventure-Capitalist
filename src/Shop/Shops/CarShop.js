class CarShop extends Shop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "car-shop"
        };

        this.price = 100;

        this.profit = 80;
        this.interval = 12000;

        super.constructor();
    }

    update() {
        super.update();
    }
}
