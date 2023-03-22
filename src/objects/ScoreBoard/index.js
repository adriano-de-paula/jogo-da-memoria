import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VSPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/` 
        <header class="score-board">
            ${PlayerName("Jogador 1")}
            ${PlayerScore()}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName("Jogador 2")}
        </header>
    `;
}

export default ScoreBoard;