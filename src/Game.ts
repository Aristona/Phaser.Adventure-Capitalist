/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />
/// <reference path="../typings/globals/socket.io-client/index.d.ts" />

import * as Phaser from "phaser";
import * as io from "socket.io-client";

import { BootState } from "./State/States/BootState";
import { LoadState } from "./State/States/LoadState";
import { MenuState } from "./State/States/MenuState";
import { HelpState } from "./State/States/HelpState";
import { GameState } from "./State/States/GameState";

export class Game extends Phaser.Game
{
    public money: number = 0;

    constructor() {
        super({
            enableDebug: true,
            width: 800,
            height: 600,
            renderer: Phaser.AUTO,
            parent: 'content',
            transparent: false,
            antialias: true,
            preserveDrawingBuffer: false,
            physicsConfig: null,
            seed: '',
            state: null,
            forceSetTimeOut: false
        });
    }

    preload() {
        this.state.add("BootState", new BootState(this));
        this.state.add("LoadState", new LoadState(this));
        this.state.add("MenuState", new MenuState(this));
        this.state.add("HelpState", new HelpState(this));
        this.state.add("GameState", new GameState(this));
    }

    start() {
        this.state.start("BootState");
    }
}
