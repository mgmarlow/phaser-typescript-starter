import 'p2';
import 'pixi';
import 'phaser';

class App extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO, 'phaser-canvas');
    }
}

window.onload = () => {
    const app = new App();
}