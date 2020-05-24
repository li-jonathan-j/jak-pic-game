import React from 'react';
import './App.css';
import ImageGrid from './ImageGrid';
import GameInput from './GameInput';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      guess: '',
      answer: '',
      success: true,
      gameActive: false,
    }
  }

  startGame = () => {
    console.log('startgame');
    this.setState({
        guess: '',
        answer: 'corgi',
        gameActive: true,
        success: false,
    })
  }

  endGame = (correct) => {
    console.log('end game', correct);
    this.setState({
      gameActive: false,
      success: correct
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to the pic game!
        </header>

        <ImageGrid gameActive={this.state.gameActive}></ImageGrid>
        <GameInput 
            startGame={this.startGame} 
            endGame={this.endGame} 
            gameState={this.state}>
        </GameInput>

        <footer className="footer">
          Developed by J.A.K. studios
        </footer>
      </div>
      );
    }
  }

  export default App;
