import React from 'react';
import './App.css';
import ToDo from './Component/Todo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      Life cycle
      <ToDo/>
    </div>
  );
}

export default App;
