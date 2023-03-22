import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VSPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/` 
        <header class="score-board">
            ${PlayerName("Jogador 1")}
            ${VsPlayer()}
            ${PlayerName("Jogador 2")}
        </header>
    `;
}

export default ScoreBoard;