import React from "react";
import MemoryCard from "./components/MemoryCardBack.jsx";
import "./App.css";

function App() {
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
