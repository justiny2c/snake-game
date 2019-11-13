import React, { Component } from "react";

export class Food extends Component {
  render() {
    const style = {
      left: `${this.props.dot[0]}%`,
      top: `${this.props.dot[1]}%`
    };
    return (
      <div className="snake-food" style={style}>
      </div>
    );
  }
}

export default Food;
