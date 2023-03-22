import PlayerName from "../../components/PlayerName";
import "./style.css";

function ScoreBoard() {
    return /*html*/` 
        <header class="score-board">
            ${PlayerName("Jogador 1")}
            ${PlayerName("Jogador 2")}
        </header>
    `;
}

export default ScoreBoard;