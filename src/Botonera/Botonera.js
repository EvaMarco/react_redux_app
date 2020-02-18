import React, {Component} from 'react';
import './Botonera.css';
import {connect} from 'react-redux'

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


const mapDispatchProps = (dispatch) => ({
  inc: () => dispatch({type: 'incrementar'}),
  dec: () => dispatch({type: 'decrementar'}),
})
export default connect(null, mapDispatchProps)(Botonera) ;
