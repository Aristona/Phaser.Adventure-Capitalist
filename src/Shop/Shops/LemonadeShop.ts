import { Game } from "../../Game";

import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class LemonadeShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "lemonade-shop"
    };

    protected price: number = 1.75;
    protected profit: number = 1;
    protected interval: number = 3000;

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
