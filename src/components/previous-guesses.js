import React from 'react';

import './previous-guesses.css';

export default function PreviousGuesses(props) {
    return (
        <div className="previous-guesses-area">
        	Your previous guesses:
            <span>{props.value.join()}</span>
        </div>
    );
}

PreviousGuesses.defaultProps = {
    value: null
};