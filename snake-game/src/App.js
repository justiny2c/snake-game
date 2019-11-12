import React from "react";
import Snake from "./Snake.js";
import Food from "./Food.js";


const getRandomCords = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  return [x,y]
}

class App extends React.Component {
  state = {
    food: getRandomCords(),
    snakeDots: [
      [0, 0],
      [2, 0]
    ]
  };
  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots} />
        <Food dot={this.state.food} />
      </div>
    );
  }
}

export default App;
