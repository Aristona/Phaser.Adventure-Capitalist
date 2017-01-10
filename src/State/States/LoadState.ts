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

        this.game.phaser.add.text(50, 50, "loading...", {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        });

        this.game.phaser.load.image("level1_bg", "assets/images/game_bg.png");

        this.game.phaser.load.image("logo", "assets/images/logo.png");
        this.game.phaser.load.image("menu_bg", "assets/images/menu_bg.png");
        this.game.phaser.load.image("back", "assets/images/back.png");
        this.game.phaser.load.image("start", "assets/images/start.png");
        this.game.phaser.load.image("help", "assets/images/help.png");
        this.game.phaser.load.image("interface-bg-top", "assets/images/interface-bg-top.png");
        this.game.phaser.load.image("interface-bg-left", "assets/images/interface-bg-left.png");
        this.game.phaser.load.image("money", "assets/images/money.png");
        this.game.phaser.load.image("pizza", "assets/images/pizza.png");
        this.game.phaser.load.image("clickers", "assets/images/clickers.png");
        this.game.phaser.load.image("interface-button", "assets/images/interface-button.png");
        this.game.phaser.load.image("buy-bg", "assets/images/buy-bg.png");
        this.game.phaser.load.image("progress-bg", "assets/images/progress-bg.png");

        this.game.phaser.load.image("lemonade-shop", "assets/images/shops/lemonade-shop.png");
        this.game.phaser.load.image("newspaper-shop", "assets/images/shops/newspaper-shop.png");
        this.game.phaser.load.image("car-shop", "assets/images/shops/car-shop.png");
        this.game.phaser.load.image("pizza-shop", "assets/images/shops/pizza-shop.png");
        this.game.phaser.load.image("donut-shop", "assets/images/shops/donut-shop.png");
        this.game.phaser.load.image("shrimp-shop", "assets/images/shops/shrimp-shop.png");
        this.game.phaser.load.image("hockey-shop", "assets/images/shops/hockey-shop.png");
        this.game.phaser.load.image("movie-shop", "assets/images/shops/movie-shop.png");
        this.game.phaser.load.image("bank-shop", "assets/images/shops/bank-shop.png");
        this.game.phaser.load.image("oil-shop", "assets/images/shops/oil-shop.png");

        this.game.phaser.load.audio("bgm", ["assets/sound/bgm/Runaway_Technology.ogg"]);
        this.game.phaser.load.audio("buy", ["assets/sound/buy.ogg"]);

        this.game.phaser.load.start();
    }

    create() {
        this.game.phaser.state.start("MenuState");
    }

}
