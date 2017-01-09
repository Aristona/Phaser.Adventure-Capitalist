class Game
{
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "");
    }

    preload() {
        this.game.state.add("BootState", new BootState(this.game));
        this.game.state.add("LoadState", new LoadState(this.game));
        this.game.state.add("MenuState", new MenuState(this.game));
        this.game.state.add("HelpState", new HelpState(this.game));
        this.game.state.add("GameState", new GameState(this.game));
    }

    start() {
        this.game.state.start("BootState");
    }
}

const game = new Game;
game.preload();
game.start();
