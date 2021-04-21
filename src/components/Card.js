import React from "react";
import "./Card.css"

class Card extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         reveal: false,
    //     }

    //     this.flip = this.flip.bind(this)
    // }
       

    render() {
        let content; 

        if (this.props.reveal){
            content = this.props.content;
            console.log(content)
        } else {
            content = "Blank"
        }  

        return (
            <div onClick = {this.props.flip} className={`Card ${this.props.reveal ? 'reveal': 'blank'}`} >
                {content}
            </div>
        );
    }
}

export default Card; 