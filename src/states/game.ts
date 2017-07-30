import { Player } from '../entities/player';
import { Map } from '../entities/map';

export class Game extends Phaser.State {
    private bg: Phaser.TileSprite;
    private map: Map;
    private layer: Phaser.TilemapLayer;
    private player: Player;
    private movementKeys: Phaser.Key[];
    private shootingKeys: Phaser.CursorKeys;

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bg = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.bg.fixedToCamera = true;

        this.map = new Map(this.game, 'level1', 'tiles-1');

        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();

        this.game.physics.arcade.gravity.y = 250;
        this.player = new Player(this.game, 32, 32);

        this.movementKeys = this.initializeMovementKeys();
        this.shootingKeys = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.layer);
        this.player.updateSelf(this.movementKeys, this.shootingKeys);
    }

    private initializeMovementKeys() {
        return [
            this.game.input.keyboard.addKey(Phaser.Keyboard.W),
            this.game.input.keyboard.addKey(Phaser.Keyboard.A),
            this.game.input.keyboard.addKey(Phaser.Keyboard.S),
            this.game.input.keyboard.addKey(Phaser.Keyboard.D)
        ];
    }
}