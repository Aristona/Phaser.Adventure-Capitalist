**What**

This is a basic clone of a game called Adventure Capitalist written in Phaser framework.

**Why**

Liked the game and challenged myself to create something similar in few hours. I plan to make some improvements and use it as a base of my future idle games.

**Install**

Install `NPM` and run the following commands.

    npm install
    npm install -g http-server
    npm install -g typings
    typings install
    npm start

Browse `localhost:8080`.

**Work**

Grunt will watch the `js` folder and handle everything for you.

**Future Plans**

- Convert everything to Typescript.
- Rely on es7 async/await instead of promises where applicable.
- Add a DI Container and write tests.
- Rely on Sass/Compass to create GUI on top of Canvas screen.
- Add offline playability.
- Write a backend server and store information on Redis.
- Allow game to be played in mobile phones using Cordova/Crosswalk.
- Add the rest of the game logic, such as Angel Investors, Shop, Upgrades, Managers etc.
