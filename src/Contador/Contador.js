import React, {Component} from 'react';
import './Contador.css';

class Contador extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {valor} = this.props;
    return (
      <div className="Contador">
        {valor}
      </div>
    );
  }
}

export default Contador;
