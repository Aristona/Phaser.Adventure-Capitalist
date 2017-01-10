import { Game } from "../../Game";

import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class OilShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "oil-shop"
    };

    protected price: number = 990990990;
    protected profit: number = 99999999;
    protected interval: number = 10000;

    constructor(
        public game: Game,
        public index: number
    ) {
        super();
    }

    update() {
        super.update();
    }

    render() {
        super.render();
    }
}
