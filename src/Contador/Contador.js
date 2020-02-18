import React, {Component} from 'react';
import './Contador.css';

class Contador extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Contador">
        0
      </div>
    );
  }
}

export default Contador;
