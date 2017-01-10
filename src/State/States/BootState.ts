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
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.minWidth  = this.game.width;
        this.game.scale.minHeight = this.game.height;

        this.game.stage.backgroundColor = "#313131";
        this.game.state.start("LoadState");
    }

}
