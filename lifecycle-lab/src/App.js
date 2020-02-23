import React from 'react';
import './App.css';
import ToDo from './Component/Todo';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component {
  state = {
    text: ''
  }

  render() {
    return (

      <div className="App">
        <ToDo />
        {/* <ToastBox/> */}
        life cycle lab
    </div>
    )
  }
}

export default App;
