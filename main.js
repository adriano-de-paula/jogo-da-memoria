import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/components/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${PlayerName("Jogador 1")}
        ${PlayerName("Jogador 2")}
        ${BoardGame(8)}
    `
);