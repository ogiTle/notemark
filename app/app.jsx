import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import Deskmark from './components/Deskmark/index';

ReactDom.render(<Deskmark />, document.getElementById('app'));

export default hot(Deskmark);
