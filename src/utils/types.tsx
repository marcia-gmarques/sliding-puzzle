//data types used in the app
export type TileType = {
    value: number; //value of the tile, 0 for empty tile
    index: number; //index of the tile in the array
}
export type BoardType = TileType[]; //array of tiles representing the board

