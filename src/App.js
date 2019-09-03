import React from "react";
import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";
import Wrapper from "./components/Wrapper";

import Score from "./components/Score";

import cards from "./cards.json";
import "./App.css";

let playedCards = [];
let score = 0;
let highScore = 0;
let message = "";

class App extends React.Component {
  state = {
    cards,
    playedCards,
    score,
    highScore,
    message
  };

  //A function to shuffle the array that contains the card info
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleClick = id => {
    if (playedCards.includes(id)) {
      score = 0;
      message = "You guessed incorrectly!";
      playedCards = [];
    } else {
      playedCards.push(id);
      score += 1;
      if (score > highScore) {
        highScore = score;
        message = "You guessed correctly!";
      }
    }

    this.shuffle(cards);
    this.setState({ cards, score, highScore });
  };

  render() {
    return (
      <Wrapper>
        <Score score={score} highScore={highScore} message={message} />
        <CardWrapper>
          {this.state.cards.map(cardData => (
            <Card
              image={cardData.image}
              name={cardData.name}
              id={cardData.id}
              handleClick={this.handleClick}
            />
          ))}
          ;
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
