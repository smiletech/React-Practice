import React, { PureComponent } from "react";
import "./App.css";

class Blackjackapp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: 0,
      messege: "",
      isDisabled: false,
    };
  }

  startGame = (ele) => {
    let num1 = Math.floor(Math.random() * 13 + 1);
    let num2 = Math.floor(Math.random() * 13 + 1);
    console.log(num1 + "  " + num2);
    this.setState({
      number1: num1,
      number2: num2,
      sum: num1 + num2,
      messege: "",
      isDisabled: false,
    });
  };

  NewCard = (ele) => {
    let rndnum = Math.floor(Math.random() * 13 + 1);
    // let sum = this.state.number1 + rndnum;
    this.setState({
      number1: this.state.sum,
      number2: rndnum,
      sum: this.state.sum + rndnum,
    });
  };

  //
  componentDidUpdate() {
    console.log(this.state.sum);
    this.result(this.state.sum);
  }

  result = (res) => {
    if (res == 21) {
      this.setState({
        messege: "You Won The Game",
        isDisabled: true,
      });
    } else if (res > 21) {
      this.setState({
        messege: "Game Over",
        isDisabled: true,
      });
    } else if (res < 21) {
      this.setState({
        messege: "draw Another Card",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Black Jack </h1>
        <div className="xyx">
          <div className="num">
            <div className="num1">{this.state.number1}</div>
            <div className="num1">{this.state.number2}</div>
          </div>

          <div className="btnc">
            <button className="btn" onClick={() => this.startGame()}>
              Start
            </button>
            <button
              className="btn"
              disabled={this.state.isDisabled}
              onClick={() => this.NewCard()}
            >
              New Card
            </button>
          </div>
        </div>
        {this.state.sum}
        <h4>{this.state.messege}</h4>
      </div>
    );
  }
}

export default Blackjackapp;
