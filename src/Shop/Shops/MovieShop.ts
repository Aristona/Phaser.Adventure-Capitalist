import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class MovieShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "movie-shop"
    };

    protected price: number = 250000;
    protected profit: number = 25000;
    protected interval: number = 750;

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
