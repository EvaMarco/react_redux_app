import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// me importa todas las estanterías trayendome el index
import Estanterias from './Estanterias';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Crea el Store y añadele el índice de los reducers
const tienda = createStore(Estanterias);

ReactDOM.render(
  <Provider store={tienda}>
    <App />
  </Provider>, 
  document.getElementById('root')
);


serviceWorker.unregister();
