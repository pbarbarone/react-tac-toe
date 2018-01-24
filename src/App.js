import React, { Component } from 'react';

//Importing game components
import Board from './Board.js';

class App extends Component {
	render() {
		return(
			<div className="game">
				<h1>Tic Tac Toe React</h1>
				<Board />
			</div>
		)
	}
}

export default App;