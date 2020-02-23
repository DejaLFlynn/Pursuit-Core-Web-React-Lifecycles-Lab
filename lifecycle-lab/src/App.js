import React from 'react';
import './App.css';
import ToDo from './Component/Todo';
import {toast} from 'react-toastify';
import Form from './Component/Form'
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component {

  state = {
    toDoList:[]
  }
  addToDo =(toDo)=>{  this.setState({toDoList:[...this.state.toDoList, toDo]  }) }

  
  


  render() {
    console.log(this.state)
    return (

      <div className="App">
        {/* <ToDo 
         handleInput ={this.handleInput}/> */}
         <Form
         addToDo={this.addToDo}
         />
        {/* <ToastBox/> */}
        life cycle lab
      

    </div>
    )
  }
}

export default App;
