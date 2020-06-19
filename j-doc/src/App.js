import React, {Component} from 'react';
import Input from "./Input"
import Style from "./Style"
import './App.css';

class App extends Component {

  state = {
    input: []
  }
  
  render() {
    return (
      <div className="App">
        <h1>J-Doc</h1>
        <Style/>
        <Input/> 
      </div>
    )
  }
}

export default App;