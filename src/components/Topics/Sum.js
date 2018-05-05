import React, { Component } from "react";

class Sum extends Component {
    constructor(){
        super();
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleFirstNumberChange(e){
        this.setState({number1: parseInt(e.target.value, 10) })
    }
    
    handleSecondNumberChange(e){
        this.setState({number2: parseInt(e.target.value, 10)})
    }
    handleClick(){
        let a = this.state.number1;
        let b = this.state.number2;
        let sum = a + b;
        this.setState({sum: sum}) 
    }

    render(){
        return(
            <div className="puzzleBox sumPB"> 
            <h2>Sum</h2>
            <input onChange={e=>this.handleFirstNumberChange(e)} className="inputLine" />
            <input onChange={e=>this.handleSecondNumberChange(e)} className="inputLine" />
            <button onClick={()=>this.handleClick()} className="confirmationButton">Sum</button>
            <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}
export default Sum;