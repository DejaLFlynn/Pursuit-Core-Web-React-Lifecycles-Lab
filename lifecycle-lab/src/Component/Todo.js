import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    handleSubmit(event){
        event.preventDefault()
    }
 render(){
     return(
         <form onSubmit ={this.handleSubmit}>
             <input type="text" placeholder="Enter a To Do"></input>


         </form>
     )
 }   
}

export default ToDo;