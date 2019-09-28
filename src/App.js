import React from 'react';
import Screen from './Screen';
import Button from './Button';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentNumber: "0",
      operator: false,
      decimal: false,
      resultDisplayed: false
    }
  }

  handleClick = (buttonName) => {
    let currentNumber = this.state.currentNumber
    let operator = this.state.operator
    switch(true){
       case buttonName === "0" || 
            buttonName === "1" || 
            buttonName === "2" || 
            buttonName === "3" || 
            buttonName === "4" || 
            buttonName === "5" || 
            buttonName === "6" || 
            buttonName === "7" || 
            buttonName === "8" || 
            buttonName === "9" :
        if(this.state.currentNumber!=="0"){
        currentNumber += buttonName
        operator = false
    } else {
        currentNumber = buttonName
      }
       break
       case buttonName === "+" ||
            buttonName === "-" ||
            buttonName === "*" ||
            buttonName === "/" :
       if(!this.state.operator){
         currentNumber += buttonName
         operator = true
          this.setState({decimal:false})
       } else {
         const newNumber = currentNumber.slice(0,currentNumber.length-1)
         currentNumber = newNumber
         currentNumber += buttonName
       }
        break
        case buttonName === "C":
        currentNumber = "0"
        operator = false
        this.setState({decimal:false})
        break
      case buttonName === "=":
        currentNumber = eval(currentNumber)
        operator = false
        this.setState({resultDisplayed: true})
        break
      case buttonName === ".":
        if(!this.state.decimal){
          currentNumber += "."
          this.setState({decimal:true})
        }
    }
         this.setState({currentNumber})
         this.setState({operator})
  }

  render(){
    return(
    <div>
      <h1>React Calculator</h1>
        <div id="grid-container">
        <Screen id="display" currentNumber={this.state.currentNumber} />
        <Button id="zero" name="0" handleClick={this.handleClick} />
        <Button id="one" name="1" handleClick={this.handleClick} />
        <Button id="two" name="2" handleClick={this.handleClick} />
        <Button id="three" name="3" handleClick={this.handleClick} />
        <Button id="four" name="4" handleClick={this.handleClick} />
        <Button id="five" name="5" handleClick={this.handleClick} />
        <Button id="six" name="6" handleClick={this.handleClick} />
        <Button id="seven" name="7" handleClick={this.handleClick} />
        <Button id="eight" name="8" handleClick={this.handleClick} />
        <Button id="nine" name="9" handleClick={this.handleClick} />
        <Button id="clear" name="C" handleClick={this.handleClick} />
        <Button id="equals" name="=" handleClick={this.handleClick} />
        <Button id="decimal" name="." handleClick={this.handleClick} />
        <Button id="add" name="+" handleClick={this.handleClick} />
        <Button id="subtract" name="-" handleClick={this.handleClick} />
        <Button id="multiply" name="*" handleClick={this.handleClick} />
        <Button id="divide" name="/" handleClick={this.handleClick} />
        </div>
        <footer>Paul August. 2019</footer>
        </div>
    );
  }
}

export default App;
