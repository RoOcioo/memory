import React from "react";
import Board from "./components/Board.js";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css";
import "./components/Main.css";

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      count: 0,
      frontGame: []
    }

    this.decrementCount = this.decrementCount.bind(this)
    this.chooseDifficulty = this.chooseDifficulty.bind(this)
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });

  }

   fronts = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M','N','O','P','Q','R'];

  chooseDifficulty(numDifficulty) {

    let newArray = this.fronts.splice(0, numDifficulty)
    this.setState({
      frontGame: newArray,
      count: numDifficulty
    })
  }

  render() {

    if (this.state.frontGame.length === 0) {
      return (
        <div>
          <h1>Bonjour</h1>
        <div>
          <button className="btn btn-primary col-2" onClick={() => this.chooseDifficulty(3)}> Play With 6 cards</button>
          <button className="btn btn-primary col-2" onClick={() => this.chooseDifficulty(6)}> Play With 12 cards</button>
          <button className="btn btn-primary col-2" onClick={() => this.chooseDifficulty(12)}> Play With 24 cards</button>
          <button className="btn btn-primary col-2" onClick={() => this.chooseDifficulty(18)}> Play With 36 cards</button>

        </div>
        </div>
      )
    } else {
      return (
        <div className="main container-fluid">
          <div>
            <h1>Memory Game</h1>
            {this.state.count === 0 ? (<h2>You lose.</h2>) : < Board count={this.state.count} decrementCount={this.decrementCount} fronts={this.state.frontGame} />
            }
            {/* si le count = 0 on affiche "you lose" sinon on conitnue avec board,qui lui affiche le count et la fonction decrement */}
          </div>
        </div>
      )
    }

  }
}

export default App;

// version Rocio

// class App extends React.Component {
//   render() {

//     return (
//       <div>
//         Memory Game
//        <div className="bienvenue"></div>
//       <h1> ¡Hello!</h1>
//       <div className="bienvenue-bouttons">
//         <button type= "button" className="btn btn-primary col-2" onClick={this.click}>¡Je veux jouer!</button>
//         <header className= "conteurs">
//         <div className="cronometre">
//           <h4>Temps</h4>
//           <div class="num">
//             <span id="minutos">00</span>:<span id="segundos">00</span>
//           </div>
//         </div>

//       <div className="niveau">
//         <h4>Niveau</h4>
//         <div className="num"><span id="niveau">01</span></div>
//       </div>


//       </header>
//       </div>
//       <Board /> 
//       </div>


//     );

//   }
// }

// export default App;
