import React, {Component} from 'react';
import './Imagen.css';
import logo from '../logo.svg';

class Imagen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
}

export default Imagen;
