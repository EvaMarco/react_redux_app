import React, {Component} from 'react';
import './Imagen.css';
import logo from '../logo.svg';
import {connect} from 'react-redux';

class Imagen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={logo} className={this.props.rotacion} alt="logo" />
    );
  }
}
const mapStateToProps = (tienda) => ({
  rotacion: tienda.Imagen.rotacion
});
export default connect(mapStateToProps, null)(Imagen);
