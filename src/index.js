import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.less';
import './styles/reset.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/index';
// import fastClick from 'fastclick';


// fastClick.attach(document.body);

window.onload = function () {
  let deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth > 750) deviceWidth = 750;
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
