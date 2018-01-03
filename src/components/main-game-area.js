import React from 'react';

import Feedback from './feedback';
import CurrentGuess from './current-guess';
import PreviousGuesses from './previous-guesses';

import './main-game-area.css';

export default class MainGameArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correctAnswer: Math.round(Math.random() * 100) + 1,
            previousGuesses: [],
            feedback: 'Make your guess'
        };
    }

    restartGame() {
        this.setState({
            previousGuesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        });
    }

    makeGuess(guess) {
        guess = parseInt(guess, 10); //parses a string input into an integer in base 10
        if (isNaN(guess)) {   //if the input is not an integer, the parsed result will be NaN
            this.setState({ feedback: 'Please enter a valid number' });
            return;
        }
        const difference = Math.abs(guess - this.state.correctAnswer);
        let feedback = '';
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You got it!';
        }

        this.setState({
            feedback,   //this is the same as feedback: feedback,
            previousGuesses: [...this.state.previousGuesses, guess]
        });
    }

    render() {
        return (
            <div className="main-game-area">
                <h2>HOT or COLD</h2>
                <div className="feedback">
                    <Feedback currentFeedback={this.state.feedback} />
                    <CurrentGuess onMakeGuess={guess => this.makeGuess(guess)} />
                    <PreviousGuesses id="previous-guesses" label="Previous Guesses" value={this.state.previousGuesses} />
                </div>
            </div>
        );
    }
}

