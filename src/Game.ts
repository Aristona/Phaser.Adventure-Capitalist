/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />
/// <reference path="../typings/globals/socket.io-client/index.d.ts" />

import * as Phaser from "phaser";
import * as io from "socket.io-client";

import { BootState } from "./State/States/BootState";
import { LoadState } from "./State/States/LoadState";
import { MenuState } from "./State/States/MenuState";
import { HelpState } from "./State/States/HelpState";
import { GameState } from "./State/States/GameState";

export class Game
{
    public game: Phaser.Game;

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
