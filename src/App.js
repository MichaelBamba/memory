import React, { Component } from "react";
import MemoryCard from "./components/MemoryCardBack.jsx";
import "./App.css";

function generateDeck() {
  const symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`];
  let deck = [];
  let i = 0;
  for (let i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      Symbol: symbols[i % 8]
    });
  }
  shuffle(deck);
  return deck;
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    };
  }
  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0],
        card2Index = newPickedCards[1];
      if (card1Index != card2Index) {
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
      }
      newPickedCards = [];
    }
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  }

  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          symbol={card.Symbol}
          isFlipped={card.isFlipped}
          key={index}
        />
      );
    });
    console.log(cardsJSX);
    return (
      <div className="App">
        <header className="App-header">
          <p> Memory Game</p>
          <div className="App-subheader"> Match Cards to win</div>
        </header>

        <div className="cardRow">{cardsJSX.slice(0, 4)}</div>
        <div className="cardRow">{cardsJSX.slice(4, 8)}</div>
        <div className="cardRow">{cardsJSX.slice(8, 12)}</div>
        <div className="cardRow">{cardsJSX.slice(12, 16)}</div>
      </div>
    );
  }
}

export default App;
