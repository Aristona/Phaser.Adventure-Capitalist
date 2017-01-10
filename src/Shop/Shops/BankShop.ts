import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class BankShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "bank-shop"
    };

    protected price: number = 10000000;
    protected profit: number = 9900000;
    protected interval: number = 1000;

    constructor(
        public game: Phaser.Game,
        public index: number
    ) {
        super();
    }

    update() {
        super.update();
    }
}
