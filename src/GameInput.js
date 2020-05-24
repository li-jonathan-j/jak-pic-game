import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const GAME_STATES=[
    'NEW_GAME',
    'GAME_STARTED',
    'SUCCESS',
    'SURRENDER',
]
class GameInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleGuessChange = this.handleGuessChange.bind(this);

        this.submitGuess = this.submitGuess.bind(this);
        this.handleSurrender = this.handleSurrender.bind(this);
        this.isGuessCorrect = this.isGuessCorrect.bind(this);
    
        this.correctGuess = this.correctGuess.bind(this);

        this.state = {
            guess: '',
            answer: 'corgi',
            guessAgain: false,
            success: false
        };

    }

    handleGuessChange(event) {
        this.setState({guess: event.target.value});
    };

    submitGuess() {
        console.log('submitGuess', this.state.guess);
        if (this.isGuessCorrect()) {
            this.correctGuess();
        } else {
            this.setState({guessAgain: true});
        }
    };

    handleSurrender() {
        console.log('surrender');
        this.props.endGame(false);
        this.setState({surrender: true});

    };

    isGuessCorrect() {
        return this.state.guess.toLowerCase() === this.state.answer.toLowerCase();
    };

    correctGuess() {
        console.log('correct guess');
        this.setState({
            success: true,
            guessAgain: false
        });
        // this.props.endGame(true);
    };

    render() {
        if (this.props.gameState.gameActive) {
            return (
                <div>
    
                    <Form>
                    <Form.Group>
                        <Form.Row>
                        <Form.Control as="input" type="text" placeholder="What subreddit is this from?"
                            value={this.state.guess} onChange={this.handleGuessChange} />
    
                        <Button variant="primary" onClick={this.submitGuess}>Guess!</Button>{' '}

                        {this.state.guessAgain && 
                            <Col>
                                <span>Incorrect, try again!</span>
                            </Col>
                        }

                        {this.state.success
                            ?
                            <Col>
                                <span>Correct!</span><br/>
                                <Button variant="primary" onClick={this.props.startGame}>Play again?</Button>
                            </Col>
                            :
                            <Col>
                                <Button variant="danger" onClick={this.handleSurrender}>I give up!</Button>{' '}
                            </Col>
                        }

                        </Form.Row>
                    </Form.Group>
                    </Form>

                    <span></span>
    
                </div>
            )
        } else {
            return (
                <div>
                    <Button variant="outline-primary" onClick={this.props.startGame}>Start Game!</Button>
                </div>
            )
        }
    }
}

export default GameInput;