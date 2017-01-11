import { Game } from "../../Game";

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
        public game: Game,
        public index: number
    ) {
        super();
        // @todo fix
        this.init();
    }

    update() {
        super.update();
    }

    render() {
        super.render();
    }
}
