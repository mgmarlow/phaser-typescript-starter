export class Preloader extends Phaser.State {
    preload() {
        this.game.load.image('background', 'assets/background2.png');
        this.game.state.start('menu');
    }
}