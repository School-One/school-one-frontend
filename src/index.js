import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Typography from './styles/Typography';

//REDUX
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Typography />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);