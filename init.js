class Game
{
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, '');
    }

    preload() {
        this.game.state.add('Boot', new Booter(this.game));
        this.game.state.add('Loader', new Loader(this.game));
        this.game.state.add('Menu', new Menu(this.game));
        this.game.state.add('Help', new Help(this.game));
        this.game.state.add('Game', new App(this.game));

        return this;
    }

    start() {
        this.game.state.start('Boot');
    }
}

var game = new Game;
game.preload().start();
