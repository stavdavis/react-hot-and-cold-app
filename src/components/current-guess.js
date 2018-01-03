import React from 'react';

import './current-guess.css';

export default class CurrentGuess extends React.Component {
 	onSubmit(event) {
    	event.preventDefault();

    	if (this.props.onMakeGuess) {
     		const value = this.input.value;
      		this.props.onMakeGuess(value);
    	}
    	this.input.value = '';
    	this.input.focus();
  	}

  	render() {
    	return (
      		<form onSubmit={e => this.onSubmit(e)}>
        		<input 
        			type="number" 
        			name="userGuess" 
        			id="userGuess" 
        			className="text" 
        			min="1" 
        			max="100" 
        		    ref={input => (this.input = input)} //this explicitly creates "this.input" from the input field value submitted
					required />
        		<button 
        			type="submit" 
        			name="submit" 
        			id="guessButton" 
        			className="button">Guess</button>
      		</form>
    	);
  	}
}
