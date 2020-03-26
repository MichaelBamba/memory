import React, { Component } from "react";
import MemoryCard from "./components/MemoryCardBack.jsx";
import "./App.css";

 function generateDeck () => {
   const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`],
   let deck = []
   let i = 0
   for deck if i < 16, i++
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
