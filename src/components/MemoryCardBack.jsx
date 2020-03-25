import React, { Component } from "react";
import "./MemoryCardBack.css";
class MemoryCard extends Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
  }
  clickHandler() {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }
  render() {
    let memoryCardInnerClass = "MemoryCardInner";

    this.state.isFlipped
      ? (memoryCardInnerClass = memoryCardInnerClass + " flipped")
      : (memoryCardInnerClass = "MemoryCardInner");
    return (
      <div class="MemoryCard" onClick="{this.clickHandler}">
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
