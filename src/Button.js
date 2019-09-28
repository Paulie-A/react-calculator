import React from 'react';

class Button extends React.Component {
    runParentHandleClick = () => {
  {this.props.handleClick(this.props.name)}
    }

  render(){
    return(
    <button id={this.props.id} onClick={this.runParentHandleClick} className="button"> {this.props.name}</button>
    )
  }
  }

  export default Button;