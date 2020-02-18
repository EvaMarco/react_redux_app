import React, {Component} from 'react';
import './App.css';
import Botonera from './Botonera/Botonera';
import Contador from './Contador/Contador';
import Imagen from './Imagen/Imagen'
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Imagen />
        <Contador />
        <Botonera />
        </header>
      </div>
    );
  }
}

export default App;
