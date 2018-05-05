import React, { Component } from "react";

class FilterObjects extends Component {
    constructor(){
        super();
        this.state={
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],      
              userInput: '',
              filteredEmployees: []
        }
    }
    inputChange(e) {
        this.setState({userInput: e.target.value})
    }
    handleClick(){
        let emp = this.state.employees;
        let input = this.state.userInput;
        let arr = [];
        for(let i=0; i<emp.length; i++){
            if(emp[i].hasOwnProperty(input)){
                arr.push(emp[i]);
                this.setState({filteredEmployees: arr})
            }
        }
        // console.log(input);   
    }

    render(){
        return(          
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Objects</h4>
            <span className="puzzleText">Orignal: {JSON.stringify(this.state.employees, null, 10)} </span>          
            <input  onChange={e => this.inputChange(e)} className="inputLine"/> 
            <button className="confirmationButton" onClick={()=>this.handleClick()} className="confirmationButton">Filter</button>           
             <span className="resultsBox">{JSON.stringify(this.state.filteredEmployees, null, 10)} </span>
            </div>
        )
    }
}

export default FilterObjects;