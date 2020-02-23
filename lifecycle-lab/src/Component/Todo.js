import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: " hello" }
    }
    handleSubmit(event) {
        event.preventDefault()
        let {text} = this.state
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
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="Enter a To Do" ></input>
                <h3></h3>
            <ToastContainer/>
            </form>
        )
    }
}

export default ToDo;