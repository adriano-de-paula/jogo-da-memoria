import './style.css';

function CardGame(icon = "demon-slayer-pixel", alt = "Logo Demon Slayer") {
    return /*html*/`
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}" class="icon">
        </article>
    `;
}

export default CardGame;