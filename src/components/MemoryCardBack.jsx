import React, { Component } from "react";
import "./MemoryCardBack.css";
class MemoryCard extends Component {
  render() {
    return (
      <div class="MemoryCard">
        <div class="MemoryCardInner">
          <div class="MemoryCardBack">
            <img
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt="logo"
              class="img"
            ></img>
          </div>
          <div class="MemoryCardFront">∆</div>
        </div>
      </div>
    );
  }
}
export default MemoryCard;
