import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class NewspaperShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "newspaper-shop"
    };

    protected price: number = 7;
    protected profit: number = 5;
    protected interval: number = 2000;

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
