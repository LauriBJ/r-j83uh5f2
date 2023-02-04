import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      textCount: (e) => {
        this.setState({ contador: e.target.value.length });
      },
    };
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.state.textCount}></textarea>
        <div className="counter">{this.state.contador}</div>
      </div>
    );
  }
}

export default App;
