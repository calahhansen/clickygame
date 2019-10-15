import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/cards';
import cards from './cards.json';


function App() {
  const [score, setScore] = useState(0);
  const [topscore, setTopscore] = useState(1);
  return (
    <nav className="topnav">
      <div>
        <a href="index.html">Clicky Game</a>
        <div className="topnav-centered">You guessed incorrectly!</div>
        <div className="topnav-right">
          <div>Score: {score} | Top Score: {topscore}</div>
        </div>
      </div>
    </nav>
    <div className="jumbotron">
      <div id="vertical-center">
        <h1>Piece a Quilt!</h1>
        <p>Click on a quilt block to earn points, but don't click on a quilt block more than once!</p>
      </div>
    </div>
    <Wrapper>
      <Title>Piece a Quilt!</Title>
      {cards.map(card => (
        <Card
          removeCard={(id) => setCards(cards.filter(card => card.id !== id))}
          id={card.id}
          key={card.id}
          image={card.image}
        />
      ))}
    </Wrapper>
  );
}
class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

  removeCard = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.
      // Set this.state.cards equal to the new cards array
      this.setState({ cards });
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Title>Piece a Quilt!</Title>
        {this.state.cards.map(card => (
          <Card
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}
    </div >
    </div >
    
    export default App;
