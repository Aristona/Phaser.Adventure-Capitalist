class Help {

    constructor(game) {
        this.game = game;
    }

    create() {

        let bg = this.game.add.tileSprite(0, 0, this.game.camera.width, this.game.camera.height, 'menu_bg');
        let back = this.game.add.button(50, 50, 'back');
        let text = this.game.add.text(100, 150, "Woohooo!", {
            font: "24px Arial",
            fill: "#ccc"
        });

        bg.fixedToCamera = true;

        back.scale.setTo(.5, .5);

        back.onInputOver.add((back) => {
            back.scale.setTo(.7, .7);
        });
        back.onInputOut.add(() => {
            back.scale.setTo(.5, .5);
        });
        back.onInputDown.add(() => {
            this.game.state.start('Menu');
        });

    }

};
