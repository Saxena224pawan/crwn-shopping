import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'

import './index.css';
import App from './App';
 
ReactDOM.render(
<Provider store={store} >
<BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);
// Provider is the parent of root reducer, so it allows access to all componetns
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
