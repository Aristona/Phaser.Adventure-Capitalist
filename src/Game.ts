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
    public phaser: Phaser.Game;
    public money: number = 0;
    public width: number = 800;
    public height: number = 600;

    constructor() {
        this.phaser = new Phaser.Game(this.width, this.height, Phaser.AUTO, "");
    }

    preload() {
        this.phaser.state.add("BootState", new BootState(this));
        this.phaser.state.add("LoadState", new LoadState(this));
        this.phaser.state.add("MenuState", new MenuState(this));
        this.phaser.state.add("HelpState", new HelpState(this));
        this.phaser.state.add("GameState", new GameState(this));
    }

    start() {
        this.phaser.state.start("BootState");
    }
}
