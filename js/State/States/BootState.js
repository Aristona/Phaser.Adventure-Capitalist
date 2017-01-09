class BootState extends State {

    constructor(game) {
        this.game = game;
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

};
