import React, { Component } from "react";

class FilterString extends Component {
    constructor(){
        super();
        this.state={
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        }
    }
    
    handleChange(e){
        this.setState({userInput: e.target.value})    
    }

    handleClick(){
        let input = this.state.userInput;
        console.log(input);
        let arr = this.state.names;
        let newArr = [];
        for(let i = 0; i<arr.length;i++){
            if(arr[i].includes(input)){
                newArr.push(arr[i]);
                this.setState({filteredNames: newArr});
            }
        }
    }

    render(){
        return(  
            <div className="puzzleBox filterStringPB">       
            <h4>FilterString Component</h4>
            <span className="puzzleText">Names:{JSON.stringify(this.state.names,null,10)}</span>
            <input onChange={e => this.handleChange(e)} className="inputLine" />
            <button className="confirmationButton" onClick={()=>this.handleClick()}>Filter</button>
            <span className="resultsBox filterString RB">{JSON.stringify(this.state.filteredNames)} </span>
            </div>
        )
    }
}
export default FilterString;