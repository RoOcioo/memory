import React from "react";
import Card from "./Card";
class Board extends React.Component {
    
    constructor(props) {
        super(props)

        const logoCard = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ]

        const deck = logoCard
            .concat(logoCard) //fusionner un ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.
            .sort(() => Math.random() - 0.5) // returns with equal probability that the first number is greater than the second, or vice versa, which makes the shuffle work much better.
            .map(logo => {
                return {
                    content: logo,
                    reveal: false,
                }
            })
    }


    // this.state = {
    //     deck: deck,
    //     reveal: null
    // }



    // cardWeFlip(cardId, reveal) {
    //     this.setState({
    //         deck: 

    // })
    // }

    // flip() {
    //     // console.log(`"before flip" ${this.state.reveal}`)
    //     this.setState({
    //         reveal: !this.state.reveal
    //     })
    //     // console.log(` "after flip" ${this.state.reveal}`)
    // }



    render() {



        return (
            <div>
                {logoCard.map((logo) => {
                    <div>
                        <Card content={logo} />
                        <Card content={logo} />
                    </div>
                })}
            </div>
        );
    }
}


export default Board;