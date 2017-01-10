/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />
/// <reference path="../typings/globals/socket.io-client/index.d.ts" />

import * as Phaser from "phaser";
import * as io from "socket.io-client";

export class Game
{
    public game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "");
    }

    preload() {

    }

    start() {
        console.log("boo");
    }
}

const game = new Game;
game.preload();
game.start();
