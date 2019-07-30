import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
//import Deskmark from './components/Deskmark/index';
import Deskmark from './components/Deskmark/index_tsx';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <Deskmark />
  </Provider>,
  document.getElementById('app'));

export default hot(Deskmark);
