import React, {Component} from 'react';
import './Botonera.css';

class Botonera extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Botonera">
        <button>Incrementar
        </button>
        <button>
          Decrementar
        </button>
      </div>
    );
  }
}

export default Botonera;
