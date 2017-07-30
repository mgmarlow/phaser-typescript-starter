export class Player extends Phaser.Sprite {
    private facing = 'left';

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, 'player');
        
        game.physics.enable(this, Phaser.Physics.ARCADE);

        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
        this.body.setSize(20, 32, 5, 16);

        this.animations.add('left', [0, 1, 2, 3], 10, true);
        this.animations.add('turn', [4], 20, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);

        game.camera.follow(this);
        game.add.existing(this);
    }

    updateSelf(movementKeys: Phaser.Key[], shootingCursors: Phaser.CursorKeys) {
        this.handleMovement(movementKeys);
        this.handleShooting(shootingCursors);
    }

    private handleShooting(shootingCursors: Phaser.CursorKeys) {

    }

    private handleMovement(movementKeys: Phaser.Key[]) {
        const [ W, A, S, D ] = movementKeys;
        this.body.velocity.x = 0;

        if (A.isDown) {
            this.body.velocity.x = -150;
            this.setAnimation('left');
        } else if (D.isDown) {
            this.body.velocity.x = 150;
            this.setAnimation('right');
        } else {
            this.setAnimation('idle');
        }
    }

    private setAnimation(dir: string): void {
        if (this.facing === dir) return;

        if (dir === 'idle') {
            this.animations.stop();
            this.frame = this.facing === 'left' ? 0 : 5;
        } else {
            this.animations.play(dir);
        }

        this.facing = dir;
    }
}