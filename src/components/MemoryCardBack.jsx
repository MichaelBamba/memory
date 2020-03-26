import React, { Component } from "react";
import "./MemoryCardBack.css";
class MemoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }

  clickHandler = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  };

  render() {
    const { isFlipped } = this.state;

    const memoryCardInnerClass =
      "MemoryCardInner " + (isFlipped === true && "flipped");

    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt="logo"
              className="img"
            />
          </div>
          <div className="MemoryCardFront">
            <p>{this.props.symbol}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
