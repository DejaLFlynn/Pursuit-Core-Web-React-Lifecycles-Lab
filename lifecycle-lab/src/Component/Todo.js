import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: " hello" }
    }
 
    componentDidMount() {
        console.log("componentWillMount()")
    }

    handleChange(event) {

        this.setState({ text: event.target.value })
    }
    componentWillUnmount() {

    }
    render() {
       
        return (
        
                <input type="text" onChange={this.handleChange} placeholder="Enter a To Do" ></input>
    
           
        )
    }
}

export default ToDo;