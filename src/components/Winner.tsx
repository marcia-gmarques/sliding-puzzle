//check if board is in winning configuration and display winner message
import '../styles/Winner.css';
import { type BoardType } from '../utils/types.tsx';
import Confetti from 'react-confetti-boom';

export default function Winner(props: { board: BoardType }) {
    //function to check if board is in winning configuration
    const isWinner = (board: BoardType): boolean => {
        //winning configuration is tiles in ascending order with empty tile (0) at the end
        for (let i = 0; i < board.length - 1; i++) {
            if (board[i].value !== i + 1) {
                return false; //if any tile is not in the correct position, return false
            }
        }
        return board[board.length - 1].value === 0; //check if last tile is empty tile
    }

    return (
        <div className="winner">
            {isWinner(props.board) && <h3>Congratulations! You completed the game!</h3>}
            {isWinner(props.board) && <Confetti mode="boom" particleCount={200} colors={['#c34847', '#ff884b', '#700f0d', '#d8d0bb']} />}
        </div>
    );
}