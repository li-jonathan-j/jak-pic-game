import { boundMethod } from 'autobind-decorator';
import React, { ChangeEvent, Component, Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AppState, GAME_STATES } from './App';

export interface GameInputProps extends AppState {
  endGame: () => void;
  setGuess: (guess: string) => void;
  startGame: () => void;
  submit: () => void;
}

export class GameInput extends Component<GameInputProps, {}> {
  @boundMethod
  handleGuessChange(event: ChangeEvent<HTMLInputElement>) {
    const { setGuess } = this.props;
    setGuess(event.target.value);
  };

  renderCorrect() {
    return (
      <Col>
        <span>Correct!</span><br/>
        <Button variant="primary" onClick={this.props.startGame}>Play again?</Button>
      </Col>
    );
  }

  renderGiveUp() {
    return (
      <Col>
        <span>Incorrect, try again!</span>
        <Button variant="danger" onClick={this.props.endGame}>I give up!</Button>{' '}
      </Col>
    );
  }

  renderStartGame() {
    return (
      <div>
        <Button variant="outline-primary" onClick={this.props.startGame}>Start Game!</Button>
      </div>
    );
  }

  renderForm() {
    const { gameState, guess, submit }  = this.props;
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Row>
              <Form.Control
                as="input"
                type="text"
                placeholder="What subreddit is this from?"
                value={guess}
                onChange={this.handleGuessChange}
              />
  
              <Button variant="primary" onClick={submit}>Guess!</Button>{' '}

              {gameState === GAME_STATES.FAILURE && 
                this.renderGiveUp()
              }

              {gameState === GAME_STATES.SUCCESS &&
                this.renderCorrect()
              }
              </Form.Row>
            </Form.Group>
          </Form>
        </div>
    );
  }

  render() {
    const { gameActive } = this.props;
    return (
      <Fragment>
        {gameActive
          ? this.renderForm()
          : this.renderStartGame()
        }
      </Fragment>
    );
  }
}