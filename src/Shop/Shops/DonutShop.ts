import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class DonutShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "donut-shop"
    };

    protected price: number = 3000;
    protected profit: number = 1250;
    protected interval: number = 1250;

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
