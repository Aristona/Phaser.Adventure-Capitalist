import { Game } from "../../Game";

import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class HockeyShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "hockey-shop"
    };

    protected price: number = 50000;
    protected profit: number = 10000;
    protected interval: number = 2500;

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
