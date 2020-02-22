import React from 'react';

class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {text: " hello"}
    }
    handleSubmit(event){
        event.preventDefault()
    }
    componentDidMount(){
    console.log("componentWillMount()")
    }

    handleChange(event){
        console.log(event)
        // this.setState({text:event.target.value})
    }
    componentWillUnmount(){

    }
 render(){
     return(
         <form onSubmit ={this.handleSubmit}>
             <input type="text" onChange={this.handleChange}placeholder="Enter a To Do" ></input>
            <h3></h3>

         </form>
     )
 }   
}

export default ToDo;