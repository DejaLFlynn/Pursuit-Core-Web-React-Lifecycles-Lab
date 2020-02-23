import React from 'react';
import './App.css';
import ToDo from './Component/Todo';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component {
  state = {
    text: ''
  }
  handleInput(event) {
    event.preventDefault()
    this.state({text:event.target.value})
}

  render() {
    return (

      <div className="App">
        <ToDo 
         handleInput ={this.handleInput}/>
        {/* <ToastBox/> */}
        life cycle lab
      

    </div>
    )
  }
}

export default App;
