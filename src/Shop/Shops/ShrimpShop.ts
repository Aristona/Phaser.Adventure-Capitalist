import { Game } from "../../Game";

import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class ShrimpShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "shrimp-shop"
    };

    protected price: number = 10000;
    protected profit: number = 3333;
    protected interval: number = 1000;

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
