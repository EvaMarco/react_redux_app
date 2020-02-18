import React, {Component} from 'react';
import './Botonera.css';

class Botonera extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {inc, dec} =this.props;
    return (
      <div className="Botonera">
        <button onClick={inc}>Incrementar
        </button>
        <button onClick={dec}>
          Decrementar
        </button>
      </div>
    );
  }
}

export default Botonera;
