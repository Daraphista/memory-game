import { useEffect, useState } from "react"
import Card from "./Card";

// object factory for cards
const CardObj = (title, className) => {
  return {title, className};
}

const Main = (props) => {
  const [cards, setCards] = useState(
    [
      CardObj('One Tail', 'one-tail'),
      CardObj('Two Tails', 'two-tails'),
      CardObj('Three Tails', 'three-tails'),
      CardObj('Four Tails', 'four-tails'),
      CardObj('Five Tails', 'five-tails'),
      CardObj('Six Tails', 'six-tails'),
      CardObj('Seven Tails', 'seven-tails'),
      CardObj('Eight Tails', 'eight-tails'),
      CardObj('Nine Tails', 'nine-tails'),
    ]
  )
  const [clickedCards, setClickedCards] = useState(
    []
  );

  // function to shuffle cards
  const shuffleCards = () => {
    // Make shallow copy of cards array...
    let shallowCards = cards;
    
    let currentIndex = shallowCards.length;
    let randomIndex;

    // While there remain items to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [shallowCards[currentIndex], shallowCards[randomIndex]] = [
        shallowCards[randomIndex], shallowCards[currentIndex]];
    }

    setCards(shallowCards);
  }
  // function to keep track of clicked cards
  const recordClickedCard = (cardObj) => {
    setClickedCards(clickedCards.concat(cardObj));
    evaluateClickedCards(cardObj);
  }
  const evaluateClickedCards = (currentCardObj) => {
    // check if the cardObj clicked hasn't been clicked yet
    const didWin = clickedCards.every(cardObj => cardObj !== currentCardObj);
    props.recordCurrentScore(didWin)

    // If the card was already clicked, reset the clickedCards array to reset the game
    if(!didWin) {
      setClickedCards([]);
    }
  }

  useEffect(() => {
    shuffleCards();
  })

  // render main
  return (
    <main>
      {cards.map(card => {
        return (
          <Card cardObj={card} onClick={recordClickedCard}/>
        )
      })}
    </main>
  )
}

// export Main component
export default Main
