import React from 'react';
import './App.css';
import Todo from './Component/Todo';
import {toast} from 'react-toastify';
import Form from './Component/Form'
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component {

  state = {
    toDoList:[]
  }
  addToDo =(toDo)=>{  
    this.setState({toDoList:[...this.state.toDoList , toDo]})
   }

  render() { 
        const {addToDo}=this.state;
  //    <li>{handleSubmit}</li>
    console.log(this.state)
    return (

      <div className="App">
        {/* <ToDo handleInput ={this.handleInput}/> */}
         <Form addToDo={this.addToDo}/>
      
        life cycle lab
        <br></br>
       <ul >{addToDo}</ul>
      <br></br>
    </div>
    )
  }
}

export default App;
