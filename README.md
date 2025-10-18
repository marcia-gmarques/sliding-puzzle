# Sliding Puzzle Game

This is a React + TypeScript implementation of the classic sliding puzzle game (also known as 8-puzzle, 15-puzzle, etc.), built with Vite.

## Game Logic

The board consists of a grid of numbered tiles with one empty space. The goal is to arrange the tiles in ascending order, with the empty space at the end (bottom-right corner).

- **Grid Sizes:** You can choose between 3x3, 4x4, or 5x5 grids using the grid size buttons. The board and logic update dynamically.
- **Solvability:** The game ensures that every shuffled puzzle is solvable. For odd grid sizes (3x3, 5x5), the number of inversions must be even. For even grid sizes (4x4), both the number of inversions and the row of the empty tile are considered.
- **Moves:** Each time you click a tile adjacent to the empty space, it slides into the empty spot. The move counter tracks your progress.
- **Win Condition:** When all tiles are in order and the empty space is at the end, a winner message and confetti appear.

## Button Functions

- **Grid Size Buttons (3x3, 4x4, 5x5):** Change the board size. The active button is highlighted.
- **New Game:** Shuffles the current board and resets the move counter.
- **With Image / No Image:** Toggle between showing numbers or an image sliced into tiles. When "With Image" is active, each tile displays a portion of the image (except the empty tile).

## How the Image Mode Works

- When image mode is enabled, each tile (except the empty one) shows a piece of the selected image, calculated using CSS background positioning so the full image appears when solved.
- When image mode is disabled, tiles show their numbers as usual.

## Customization

- You can change the image by replacing the file in the `src/assets` folder and updating the path in the code.
- The board is responsive and works on all screen sizes.

## Development

This project uses Vite for fast development and hot module replacement. To start the app:

```bash
npm install
npm run dev
```

---
Enjoy solving the sliding puzzle!
