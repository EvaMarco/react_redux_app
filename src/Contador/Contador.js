import React, {Component} from 'react';
import './Contador.css';
import {connect} from 'react-redux'

class Contador extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {arroz} = this.props;
    return (
      <div className="Contador">
        {arroz}
      </div>
    );
  }
}

const mapStateToProps = (tienda) => ({
  arroz: tienda.Estanteria.arroz
})

export default connect(mapStateToProps, null)(Contador);
