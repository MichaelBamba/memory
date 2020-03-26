import React, { Component } from "react";
import MemoryCard from "./components/MemoryCardBack.jsx";
import "./App.css";

 function generateDeck () => {
   const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`],
   let deck = []
   let i = 0
    for (let i = 0; i < 16;i ++ ) {
    deck.push({
      isFlipped: false,
      Symbol: symbols[i % 8]
    });
 }

class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }

function App() {
  let deck = []
  let pickedCards = []
  return (
    <div className="App">
      <header className="App-header">
        <p> Memory Game</p>
        <subheader className="App-subheader"> Match Cards to win</subheader>
      </header>
      
      <div class="cardRow">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>{" "}
      <div class="cardRow">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>{" "}
      <div class="cardRow">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>{" "}
      <div class="cardRow">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
