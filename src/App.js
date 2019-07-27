import React from 'react';
import cards from "./cards.json"

import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card"

// import shuffle from "./functions/shuffle"

class App extends React.Component {
  state = {
    cards,
    alreadyClicked : [],
    gameState: true,
    score: 0
  }

  newGame = (value) => {
    this.setState({
      score : 0,
      gameState : true,
      alreadyClicked : []
    })
  }

  shuffle = image => {
    // only shuffle if the gameState = true;
    if(this.state.gameState === true) {
      // Determine if the value exists in the array or not;
      if(this.state.alreadyClicked.filter(element => {return element.indexOf(image) !== -1}).length !== 0) {
        console.log("Game OVER!")
        this.setState({gameState:false})
      }
      else {
      // Increase the score
      let newScore = this.state.score + 1;
      this.setState({score:newScore});

      // First create a sliced version of the array
      let newAlreadyClicked = this.state.alreadyClicked.slice();
      // push the new link into the array
      newAlreadyClicked.push(image);
      // Set the state for alreadyClicked to the new array
      this.setState({alreadyClicked : newAlreadyClicked})

      // Shuffle the array
      for(let i = cards.length - 1; i > 0; i -- ) {
        let j = Number;
        j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }

      // Set the state of the new array
      this.setState({cards:cards})
      }
    }
    else {
      console.log("Game is already over, gotta restart")
    }
  }

  render() {
    return (
      <div className="App">
        <Jumbotron 
          score = {this.state.score}
          gameState = {this.state.gameState}
          click = {this.newGame}
        >
        </Jumbotron>

        <div className="">
          {cards.map(card =>
            <Card
              image = {card.image}
              key = {card.id}
              click = {this.shuffle}
              id = {card.id} />)}
        </div>
      </div>
    );
  }
}

export default App;

