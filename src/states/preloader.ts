export class Preloader extends Phaser.State {
    preload() {
        this.game.state.start('menu');
    }
}