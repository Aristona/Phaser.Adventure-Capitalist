class BankShop extends Shop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "bank-shop"
        };

        this.price = 10000000;

        this.profit = 99000000;
        this.interval = 75000;

        super.constructor();
    }

    update() {
        super.update();
    }
}
