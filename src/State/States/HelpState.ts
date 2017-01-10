import { Game } from "../../Game";

import { State } from "../State";
import { StateInterface } from "../StateInterface";

export class HelpState extends State implements StateInterface {

    constructor(
        public game: Game
    ) {
        super();
    }

    create() {

        let bg = this.game.phaser.add.tileSprite(
            0,
            0,
            this.game.phaser.camera.width,
            this.game.phaser.camera.height,
            "menu_bg"
        );

        let back = this.game.phaser.add.button(50, 50, "back");
        let text = this.game.phaser.add.text(100, 150, "Woohooo!", {
            font: "24px Arial",
            fill: "#ccc"
        });

        bg.fixedToCamera = true;

        back.scale.setTo(.5, .5);

        back.onInputOver.add((back: any) => {
            back.scale.setTo(.7, .7);
        });
        back.onInputOut.add(() => {
            back.scale.setTo(.5, .5);
        });
        back.onInputDown.add(() => {
            this.game.phaser.state.start("MenuState");
        });

    }

}
