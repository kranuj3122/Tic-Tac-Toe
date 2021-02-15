import React from 'react';
import './App.css';
import GridRow from "../GridRow";
import Header from "../Header";
import Footer from '../Footer';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameState: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      currentPlayer: 'X',
      isGameActive: true,
      winCondition: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
    };
  }
  handlePlayerClick = (row, col) => {
    //we never mutate values by refference
    if (this.state.isGameActive && this.state.gameState[row][col] === '') {
      //copy array
      let copied = [...this.state.gameState];
      //assign value
      copied[row][col] = this.state.currentPlayer;
      this.setState({
        gameState: copied
      });

      let won = false;
      let win=[...this.state.gameState[0],...this.state.gameState[1],...this.state.gameState[2]]
      for (let i = 0; i < this.state.winCondition.length; i++) {
        let a = win[this.state.winCondition[i][0]];
        let b = win[this.state.winCondition[i][1]];
        let c = win[this.state.winCondition[i][2]];
        if (a === b && b === c && a === this.state.currentPlayer) {
          won = true;
          break;
        }
      }
      if (won) {
        this.setState({
          isGameActive: false
        });
        alert(this.state.currentPlayer+' has won');
        return;
      }
      let draw = true;
      for(let i=0;i<copied.length;i++) {
        if(copied[i].includes('')) {
          draw=false;
          break;
        }
      }
      if (draw) {
        this.setState({
          isGameActive: false
        });
        alert('Draw');
        return;
      }
      this.setState({
        currentPlayer: this.state.currentPlayer === 'X' ? '0' : 'X'
      });
    }

  }
  render() {
    return (
      <div className="container">
        <Header />
        <div id="board">
          {this.state.gameState.map((currRow, currIndex) => (
            <GridRow rows={currRow}
              rowIndex={currIndex}
              handlePlayerClick={this.handlePlayerClick}
            />
          ))}
        </div>
        <Footer turn={this.state.currentPlayer} />
      </div>
    );
  }
}
export default App;
