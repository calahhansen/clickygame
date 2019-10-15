import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/cards';
import cards from ;


function App() {
  const [score, setScore] = useState(0);
  const [topscore, setTopscore] = useState(1);
  return (
    <div>
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

      <div className="container">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default App;
