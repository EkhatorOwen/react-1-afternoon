import React, { Component } from "react";

class EvenAnadOdd extends Component {
    constructor() {
        super();
        this.state ={
            evenArray : [],
            oddArray : [],
            userInput : []
        }
    }
    inputChange(e){
        this.setState({userInput: e.target.value})
      //  console.log(e.target.value)
    }
    handleClick(){
        let str = this.state.userInput;
        let arr = str.split(',')
      //  this.setState({userInput: arr}) 
        let oddArr = [];
        let evenArr = [];
        
        for(let i = 0; i<arr.length; i++){
            if(arr[i]%2===0){
                evenArr.push(parseInt(arr[i], 10));
                this.setState({evenArray: evenArr});
            }
            else{
                oddArr.push(parseInt(arr[i], 10))
                this.setState({oddArray: oddArr})
            }
    }
    }
    render(){

        return(
           <div className="puzzleBox evenAndOddPB">
           <h4>Evens and Odds</h4>
            <input onChange={e => this.inputChange(e)} className="inputLine"/> 
            <button onClick={()=>this.handleClick()} className="confirmationButton">Split</button>
            <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)} </span>
            <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)} </span>
           </div>

        )
    }
}

export default EvenAnadOdd;