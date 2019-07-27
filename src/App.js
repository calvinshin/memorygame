import React from 'react';
import cards from "./cards.json"

import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card"

// import shuffle from "./functions/shuffle"

class App extends React.Component {
  state = {cards}

  shuffle = () => {
    console.log("Test click")
    for(let i = cards.length - 1; i > 0; i -- ) {
      let j = Number;
      j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.setState({cards:cards})
  }

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <div className="" onClick={this.shuffle}>
          {cards.map(card =>
            <Card
              image = {card.image}
              key = {card.id} />)}
        </div>
      </div>
    );
  }
}

export default App;
