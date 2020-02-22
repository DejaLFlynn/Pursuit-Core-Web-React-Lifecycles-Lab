import React from 'react';

class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {text: " "}
    }
    handleSubmit(event){
        event.preventDefault()
    }
    componentDidMount(){
       let input= this.state.text
    }
    

    handleChange(event){
        this.setState({text:event.target.value})
    }
    componentWillUnmount(){

    }
 render(){
     return(
         <form onSubmit ={this.handleSubmit}>
             <input type="text" onChange={this.handleChange}placeholder="Enter a To Do" value={this.state.text}></input>
            <h3></h3>

         </form>
     )
 }   
}

export default ToDo;