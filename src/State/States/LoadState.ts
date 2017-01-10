import { Game } from "../../Game";

import { State } from "../State";
import { StateInterface } from "../StateInterface";

export class LoadState extends State implements StateInterface {

    constructor(
        public game: Game
    ) {
        super();
    }

    preload() {

        this.game.add.text(50, 50, "loading...", {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        });

        this.game.load.image("level1_bg", "assets/images/game_bg.png");

        this.game.load.image("logo", "assets/images/logo.png");
        this.game.load.image("menu_bg", "assets/images/menu_bg.png");
        this.game.load.image("back", "assets/images/back.png");
        this.game.load.image("start", "assets/images/start.png");
        this.game.load.image("help", "assets/images/help.png");
        this.game.load.image("interface-bg-top", "assets/images/interface-bg-top.png");
        this.game.load.image("interface-bg-left", "assets/images/interface-bg-left.png");
        this.game.load.image("money", "assets/images/money.png");
        this.game.load.image("pizza", "assets/images/pizza.png");
        this.game.load.image("clickers", "assets/images/clickers.png");
        this.game.load.image("interface-button", "assets/images/interface-button.png");
        this.game.load.image("buy-bg", "assets/images/buy-bg.png");
        this.game.load.image("progress-bg", "assets/images/progress-bg.png");

        this.game.load.image("lemonade-shop", "assets/images/shops/lemonade-shop.png");
        this.game.load.image("newspaper-shop", "assets/images/shops/newspaper-shop.png");
        this.game.load.image("car-shop", "assets/images/shops/car-shop.png");
        this.game.load.image("pizza-shop", "assets/images/shops/pizza-shop.png");
        this.game.load.image("donut-shop", "assets/images/shops/donut-shop.png");
        this.game.load.image("shrimp-shop", "assets/images/shops/shrimp-shop.png");
        this.game.load.image("hockey-shop", "assets/images/shops/hockey-shop.png");
        this.game.load.image("movie-shop", "assets/images/shops/movie-shop.png");
        this.game.load.image("bank-shop", "assets/images/shops/bank-shop.png");
        this.game.load.image("oil-shop", "assets/images/shops/oil-shop.png");

        this.game.load.audio("bgm", ["assets/sound/bgm/Runaway_Technology.ogg"]);
        this.game.load.audio("buy", ["assets/sound/buy.ogg"]);

        this.game.load.start();
    }

    create() {
        this.game.state.start("MenuState");
    }

}
