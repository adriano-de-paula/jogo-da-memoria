import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VSPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/` 
        <header class="score-board">
            ${ArrowDown(2)}
            ${PlayerName("Jogador 1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore(2)}
            ${PlayerName("Jogador 2")}
        </header>
    `;
}

export default ScoreBoard;