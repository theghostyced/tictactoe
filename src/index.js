import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import Scene from './Scene.tsx';

import 'styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/'>
      <Scene />
    </Router>
  </React.StrictMode>,
  document.getElementById('scene')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
