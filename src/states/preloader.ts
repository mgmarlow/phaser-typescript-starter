export class Preloader extends Phaser.State {
    preload() {
        this.game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles-1', 'assets/tiles-1.png');
        this.game.load.image('background', 'assets/background2.png');
        this.game.load.spritesheet('player', 'assets/dude.png', 32, 48);
        this.game.state.start('menu');
    }
}