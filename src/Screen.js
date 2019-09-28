import React from 'react';

class Screen extends React.Component {
    render(){
    return(
    <div id={this.props.id}>
      {this.props.currentNumber}
      </div>
      )
      }
      }

export default Screen;