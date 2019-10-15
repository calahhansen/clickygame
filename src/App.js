import React, { useState } from 'react';
import './App.css';
import Card from './components/cards';
import Cards from './components/images';
import Wrapper from './components/wrapper'
import Jumbo from './components/Jumbo';
import Nav from './components/Nav';


export default function App() {
  const [score, setScore] = useState(0);
  const [topscore, setTopscore] = useState(1);
  const [cards, setCards] = useState(Cards);
  return (
    <Wrapper>
      <Nav>
        <div>
          <a href="index.html">Clicky Game</a>
          <div className="topnav-centered">You guessed incorrectly!</div>
          <div className="topnav-right">
            <div>Score: {score} | Top Score: {topscore}</div>
          </div>
        </div>
      </Nav>
      <Jumbo>
        <div id="vertical-center">
          <h1>Piece a Quilt!</h1>
          <p>Click on a quilt block to earn points, but don't click on a quilt block more than once!</p>
        </div>
      </Jumbo>
      {cards.map(card => (
        <Card
          removeCard={(id) => setCards(cards.filter(card => Cards.id !== id))}
          id={Cards.id}
          key={Cards.id}
          img={Cards.image}
        />
      ))}
    </Wrapper>
  );
}

