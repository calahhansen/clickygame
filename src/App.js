import React, { useState } from 'react';
import './App.css';
import Card from './components/cards';
import cardsJSON from './cards.json';
import Wrapper from './components/wrapper'
import Jumbo from './components/Jumbo';
import Nav from './components/Nav';


export default function App() {
  console.log(cardsJSON);
  const [score, setScore] = useState(0);
  const [topscore, setTopscore] = useState(1);
  const [cards, setCards] = useState(cardsJSON);
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
          removeCard={(isClicked) => {
            console.log(isClicked);
            // if clicked is equal to False - change isClicked to True, add 1 point to score and shuffle blocks else if isClicked is equal to True than "you lose"
          }}
          id={card.id}
          key={card.id}
          img={card.image}
          isClicked={card.isClicked}
        />
      ))}
    </Wrapper>
  );
}

