export class Game extends Phaser.State {
    private bg: Phaser.TileSprite;

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.bg = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.bg.fixedToCamera = true;
    }

    update() {

    }
}