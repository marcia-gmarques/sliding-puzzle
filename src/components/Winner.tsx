//check if board is in winning configuration and display winner message
import '../styles/Winner.css';
import { type BoardType } from '../utils/types.tsx';
import { isSolved } from '../utils/puzzle.tsx';
import Confetti from 'react-confetti-boom';

export default function Winner(props: { board: BoardType }) {
    return (
        <div className="winner">
            {/* if the board is solved, show confetti and winner message */}
            {isSolved(props.board) && <Confetti mode="boom" particleCount={200} colors={['#c34847', '#ff884b', '#700f0d', '#d8d0bb']} />}
            {isSolved(props.board) && <h3>Congratulations! You completed the game!</h3>}
        </div>
    );
}