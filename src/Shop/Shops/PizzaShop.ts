import { Game } from "../../Game";

import { Shop } from "../Shop";
import { ShopInterface } from "../ShopInterface";

export class PizzaShop extends Shop implements ShopInterface {

    protected asset: {
        readonly name: string
    } = {
        name: "pizza-shop"
    };

    protected price: number = 200;
    protected profit: number = 25;
    protected interval: number = 800;

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
