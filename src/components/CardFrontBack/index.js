import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/ `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("tanjirou-pixel", "Tanjirou")}
        </article>
    `;
}

export default CardFrontBack;