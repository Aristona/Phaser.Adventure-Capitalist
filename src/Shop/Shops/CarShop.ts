import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class CarShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "car-shop"
    };

    protected price: number = 100;
    protected profit: number = 80;
    protected interval: number = 12000;

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
