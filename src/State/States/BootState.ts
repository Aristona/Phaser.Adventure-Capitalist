import { State } from "../State";
import { StateInterface } from "../StateInterface";

export class BootState extends State implements StateInterface {

    constructor(
        public game: Phaser.Game
    ) {
        super();
    }

    preload() {

    }

    create() {

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.minWidth  = game.width;
        this.game.scale.minHeight = game.height;

        this.game.stage.backgroundColor = "#313131";
        this.game.state.start("LoadState");
    }

}
