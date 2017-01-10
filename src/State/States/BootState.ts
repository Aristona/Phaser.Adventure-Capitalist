import { Game } from "../../Game";

import { State } from "../State";
import { StateInterface } from "../StateInterface";

export class BootState extends State implements StateInterface {

    constructor(
        public game: Game
    ) {
        super();
    }

    preload() {

    }

    create() {
        this.game.phaser.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.phaser.scale.minWidth  = this.game.width;
        this.game.phaser.scale.minHeight = this.game.height;

        this.game.phaser.stage.backgroundColor = "#313131";
        this.game.phaser.state.start("LoadState");
    }

}
