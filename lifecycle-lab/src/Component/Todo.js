import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
class ToDo extends React.Component {
    
 
    componentDidMount(){
        console.log("componentWillMount()")
    }


    componentWillUnmount(){

    }
    render() {
       
        return (
                <input type="text" onChange={this.handleChange} placeholder="Enter a To Do" ></input>
    
           
        )
    }
}

export default ToDo;