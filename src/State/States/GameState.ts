import { Game } from "../../Game";

import { State } from "../State";
import { StateInterface } from "../StateInterface";

import { Translator } from "../../Translator/Translator";

import { LemonadeShop } from "../../Shop/Shops/LemonadeShop";
import { NewspaperShop } from "../../Shop/Shops/NewspaperShop";
import { CarShop } from "../../Shop/Shops/CarShop";
import { PizzaShop } from "../../Shop/Shops/PizzaShop";
import { DonutShop } from "../../Shop/Shops/DonutShop";
import { ShrimpShop } from "../../Shop/Shops/ShrimpShop";
import { HockeyShop } from "../../Shop/Shops/HockeyShop";
import { MovieShop } from "../../Shop/Shops/MovieShop";
import { OilShop } from "../../Shop/Shops/OilShop";

import { ShopInterface } from "../../Shop/ShopInterface";

export class GameState extends State implements StateInterface {

    protected shops: ShopInterface[] = [];
    protected purchasables: string[] = [
        "LemonadeShop",
        "NewspaperShop",
        "CarShop",
        "PizzaShop",
        "DonutShop",
        "ShrimpShop",
        "HockeyShop",
        "MovieShop",
        "BankShop",
        "OilShop",
    ];

    protected buttons: string[] = [
        "Managers",
        "Upgrades",
        "Investors",
    ];

    protected config: {
        startingMoney: number
    } = {
        startingMoney: 5
    };

    protected translator: Translator = new Translator;

    protected moneyBar: Phaser.Text;

    constructor(
        public game: Game
    ) {
        super();
    }

    create() {
        let bg = this.game.add.image(0, 0, "level1_bg");
        bg.scale.setTo(1.5, 1.5);
        bg.fixedToCamera = true;

        let leftInterface = this.game.add.image(0, 0, "interface-bg-left");
        let topInterface = this.game.add.image(0, 0, "interface-bg-top");
        let money        = this.game.add.image(165, 2, "money");
        money.scale.setTo(.7, .7);

        let logotop = this.game.add.image(4, 0, "pizza");
        logotop.scale.setTo(.45, .45);

        let logobelow = this.game.add.image(2, 48, "clickers");
        logobelow.scale.setTo(.3, .3);

        this.buttons.forEach((button, i) => {
            let position = {
                x: 10,
                y: 150 + (i * 75)
            };

            this.game.add.image(position.x, position.y, "interface-button");
            this.game.add.text(position.x + 8, position.y + 10, button, {
                font: "bold 22px Arial",
                fill: "#000"
            });
        })

        this.game.sound.play("bgm", 1, true);

        this.game.money = this.config.startingMoney;

        this.moneyBar = this.game.add.text(198, 6, null, {
            font: "32px Tahoma",
            fill: "#000"
        });

        // Init all shops
        this.purchasables.forEach((purchasable, index) => {
            let instance = new LemonadeShop(this.game, index);
            this.shops.push(instance);
        });
    }

    update() {
        this.shops.forEach(shop => shop.update());
    }

    render() {
        this.moneyBar.text = this.game.money.toFixed(2);
        this.shops.forEach(shop => shop.render());
    }

}
