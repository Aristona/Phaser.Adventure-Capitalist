class PizzaShop extends AbstractShop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "pizza-shop"
        };

        this.price = 200;

        this.profit = 25;
        this.interval = 800;

        super.constructor();
    }

    update() {
        super.update();
    }
}