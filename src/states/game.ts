import { Player } from '../entities/player';

export class Game extends Phaser.State {
    private bg: Phaser.TileSprite;
    private map: Phaser.Tilemap;
    private layer: Phaser.TilemapLayer;
    private player: Player;
    private cursors: Phaser.CursorKeys;
    private jumpButton: Phaser.Key;

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.bg = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.bg.fixedToCamera = true;

        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('tiles-1');
        this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);

        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();

        this.game.physics.arcade.gravity.y = 250;
        this.player = new Player(this.game, 32, 32);

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.layer);
        this.player.updateSelf(this.cursors);
    }
}