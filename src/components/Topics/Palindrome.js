import React, { Component } from "react";

class Palindrome extends Component {
    constructor(){
        super();
        this.state={
            userInput : '',
            palindrome : ''
        }
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    handleClick(){
        let input = this.state.userInput;
        let newStr = input.split('').reverse().join('');
        if(input==newStr){
           this.setState({palindrome: "true"})
        }
        else{
            this.setState({palindrome: "false"})
        }  
    }
    render(){
        return(           
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input onChange={e=>this.handleChange(e)} className="inputLine"/>
            <button onClick={()=>this.handleClick()} className="confirmationButton">Check</button>
            <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}
export default Palindrome;