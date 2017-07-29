import 'p2';
import 'pixi';
import 'phaser';

import { Boot } from './states/boot';
import { Preloader } from './states/preloader';
import { Menu } from './states/menu';
import { Game } from './states/game';

class App extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO, 'phaser-canvas');

        this.state.add('boot', Boot);
        this.state.add('preloader', Preloader);
        this.state.add('menu', Menu);
        this.state.add('game', Game);

        this.state.start('boot');
    }
}

window.onload = () => {
    const app = new App();
};