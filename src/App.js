import React from "react";
import Board from "./components/Board.js";


import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        Memory Game
        < Board />
      </div>
    );
  }
}

export default App;