import React from "react";
import Board from "./components/Board.js";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css";
import "./components/Main.css";

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      count: 10
    }

    this.decrementCount = this.decrementCount.bind(this)
  }

  
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });

  }




  render() {
    return (
      <div className="main container-fluid">
        <div>
          <h1>Memory Game</h1>
          {this.state.count === 0 ? (<h2>You lose.</h2>) : < Board count={this.state.count} decrementCount={this.decrementCount} />
          } 
          {/* si le count = 0 on affiche "you lose" sinon on conitnue avec board,qui lui affiche le count et la fonction decrement */}
        </div>
      </div>



    );

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
