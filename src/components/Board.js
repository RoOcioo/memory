import React from "react";
import Card from "./Card";



class Board extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            logoCard: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8"
            ]
        }
        this.flip = this.flip.bind(this)
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

    flip() {
        // console.log(`"before flip" ${this.state.reveal}`)
        this.setState({
            reveal: !this.state.reveal
        })
        // console.log(` "after flip" ${this.state.reveal}`)
    }



    render() {



        return (
            <div>
                {this.state.logoCard.map((logo) => {
                    return (
                        <div>
                            <Card content={logo} />
                        </div>
                    )
                })}
            </div>
        );
    }
}


export default Board;