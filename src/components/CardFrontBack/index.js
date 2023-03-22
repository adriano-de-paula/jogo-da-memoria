import CardGame from "../CardGame";
import "./style.css";

window.cardFrontBack = {};
window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack =  $origin.closest('.card-front-back');

    $cardFrontBack.classList.toggle('-active');
 }

function CardFrontBack() { 
    return /*html*/ `
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("tanjirou-pixel", "Tanjirou")}
            </div>
        </article>
    `;
}

export default CardFrontBack;