const EXCLUDED_TILES = [13, 14, 15, 16, 46, 47, 48, 49, 50, 51];

export class Map extends Phaser.Tilemap {
    constructor (game: Phaser.Game, mapName: string, tileset: string) {
        super(game, mapName)
        this.addTilesetImage(tileset);
        this.setCollisionByExclusion(EXCLUDED_TILES);
    }

}