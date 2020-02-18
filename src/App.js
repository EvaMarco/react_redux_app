import React, {Component} from 'react';
import './App.css';
import Botonera from './Botonera/Botonera';
import Contador from './Contador/Contador';
import Imagen from './Imagen/Imagen'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: 1
    }
  }

  incrementar = () => {
    this.setState({...this.state, valor: this.state.valor + 1})
  }

  decrementar = () => {
    this.setState({...this.state, valor: this.state.valor - 1})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Imagen />
          <Contador valor = {this.state.valor}/>
          <Botonera inc = {this.incrementar} dec = {this.decrementar}/>
        </header>
      </div>
    );
  }
}

export default App;
