import React from "react";
import Card from "./Card";

class Board extends React.Component {
  constructor(props) {
    super(props)
    const fronts = [
      'A',
      'B',
      'C',
      'D'
    ]
    const deck = fronts
      .concat(fronts) // sert à concatener les 2 tableaux obtenus
      .sort(() => Math.random() - 0.5) // sert à faire un random des valeurs de l'array
      .map(face => { // permet de parcourir le tableau et de mettre les valeurs
        return {
          content: face,  // contenu de la carte
          reveal: false,  // dit que la carte n'est pas retournée
        } 
      })
    this.state = {
      deck: deck,
      firstCard: null, //initialise après chaque double tirage à Zero
      match: false,
    }

    this.cardWeFlip = this.cardWeFlip.bind(this)
    this.flip = this.flip.bind(this)
    this.matchCard = this.matchCard.bind(this)
  }

  // a expliquer
  cardWeFlip(cardIndex, reveal) {
    this.setState({
      deck: this.state.deck
        .map((face, index) => {
          if (index === cardIndex) {
            return {
              content: face.content,
              reveal: !face.reveal,
            }
          } else {
            return face;
          }
        })
    })
  }

  matchCard() {
    this.setState({
      firstCard: null,
      match: true
    })
  }; 

  flip(cardIndex) {
    if (this.state.firstCard === null) { // au depart de la valeur du flip est NULL
      this.setState({ firstCard: cardIndex }); // initialise la valeur de la 1ere carte par le 1er flip // c'est seulement après ce premier flip qu'on entre dans le jeu car firstCard aura une valeur
    } else {
      const firstCardContent = this.state.deck[this.state.firstCard].content;
      const secondCardContent = this.state.deck[cardIndex].content;
      if (firstCardContent === secondCardContent) {
        <span>{this.matchCard()}</span>  // on a un match, du coup on remet la valeur du flip à Null


      } else {
        setTimeout(() => {
          this.cardWeFlip(this.state.firstCard, false) //valeur du 1er tirage
          this.cardWeFlip(cardIndex, false) // valeur du 2e tirage
          this.setState({ firstCard: null }) // Remets la valeur du 1er Flip de carte à Null
        }, 1000) // definit le temps d'attente après un mauvais match, puis remets à Null le flip
      }
    }

    this.cardWeFlip(cardIndex, !this.state.deck[cardIndex].reveal) // a expliquer 
  }

  render() {
    console.log(this.state.firstCard);
    return (
      this.state.deck.map((face, index) => {
        return (<div>
          <Card
            flip={() => { this.flip(index) }}
            content={face.content}
            reveal={face.reveal} />
        </div>)
      })
    )
  }
}

export default Board;