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

  fronts = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];

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
        <div className="main container-fluid">
          <h1>Welcome</h1>
          <h3 className="pt-2">Memory game by : Rocio-Lucas-Lionel </h3>
          <h3 className="pt-2">Les règles:</h3>
          
          <p className="rules">Un jeu de cartes allant par paires

          Toutes les cartes sont étalées faces cachées.

          Le joueur retourne deux cartes. Si c'est la même image qui apparaît sur les deux cartes, ces dernières restent alors dévoilées sur la table et le joueur peut continuer sur sa lancée sans perdre une tentative.

          Si les deux cartes ne vont pas de pair, elles se retournent face cachée à l'endroit exact où elles étaient, et le joueur recommence en perdant une tentative.

          Le joueur gagne s'il a réussi à retrouver toutes les paires avant que le nombre de tentatives ne soient épuisés.
        Et par analogie il perd s'il n'a pas réussi à retrouver toutes les paires avant épuisement du nombre de tentatives.</p>
          
          <h5>Choisissez votre niveau:</h5>

          <button className="buttonMemory difficulty1" onClick={() => this.chooseDifficulty(3)}> Play with 6 cards</button>
          <button className="buttonMemory difficulty2" onClick={() => this.chooseDifficulty(6)}> Play with 12 cards</button>
          <button className="buttonMemory difficulty3" onClick={() => this.chooseDifficulty(12)}> Play with 24 cards</button>
          <button className="buttonMemory difficulty4" onClick={() => this.chooseDifficulty(18)}> Play with 36 cards</button>


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
