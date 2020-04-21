import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App';
import Header from './pages/Header';
import * as serviceWorker from './serviceWorker';
import { poem } from './pages/Poems.js';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App name={poem}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
