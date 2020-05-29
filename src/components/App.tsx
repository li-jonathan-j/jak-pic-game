import { boundMethod } from 'autobind-decorator';
import React, { Component } from 'react';
import { ImageGrid } from './ImageGrid';
import { GameInput } from './GameInput';
import './App.css';

export enum GAME_STATES {
  'NOT_STARTED',
  'GAME_STARTED',
  'SUCCESS',
  'FAILURE',
  'SURRENDER',
}

export interface AppState {
  answer: string;
  gameActive: boolean;
  gameState: GAME_STATES;
  guess: string;
}

export class App extends Component<{}, AppState> {

  constructor(props: any) {
    super(props);

    this.state = {
      answer: '',
      gameActive: false,
      gameState: GAME_STATES.NOT_STARTED,
      guess: '',
    };
  }

  @boundMethod
  startGame() {
    console.log('startgame');
    this.setState({
      gameActive: true,
      gameState: GAME_STATES.GAME_STARTED,
      answer: 'corgi',
      guess: '',
    });
  }

  @boundMethod
  endGame() {
    this.setState({
      answer: '',
      gameActive: false,
      gameState: GAME_STATES.NOT_STARTED,
      guess: '',
    });
  }

  @boundMethod
  setGuess(guess: string) {
    this.setState({ guess });
  }

  @boundMethod
  submit() {
    const { answer, guess } = this.state;
    const success = guess.toLowerCase() === answer.toLowerCase();
    const gameState = success ? GAME_STATES.SUCCESS : GAME_STATES.FAILURE;
    this.setState({ gameState });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          Welcome to the pic game!
        </header>

        <ImageGrid gameState={this.state.gameState} />
        <GameInput 
          endGame={this.endGame}
          setGuess={this.setGuess}
          submit={this.submit}
          startGame={this.startGame} 
          {...this.state}
        />

        <footer className="footer">
          Developed by J.A.K. studios
        </footer>
      </div>
    );
  }
}
