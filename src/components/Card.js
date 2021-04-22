import React from "react";
import Board from "./Board";
import "./Card.css"

class Card extends React.Component {
    render() {
      let content;
      if(this.props.reveal) {
        content = this.props.content;
      } else {
        content = '?'
      }
      return (
        <div onClick={this.props.flip}{...this.props.count} className={`Card ${this.props.reveal ? 'reveal': ''}`}>
        {/* <div onClick={this.props.flip} className={`Card ${this.props.reveal ? 'reveal': 'test'}`}> */}
          {content}
        </div>
      )
    }
  }
  
  export default Card;