import React from 'react';
import CreateBar from '../CreateBar/index';
import NoteList from '../../containers/NoteList/index';
import NotePart from '../../containers/NotePart/index';
import {PAGE_STATE} from '../../actions/index';

import './style.scss';



class Deskmark extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="deskmark-component">
        <nav className="nav-bar">
          <a className="nav-title" href="#"> Deskmark App </a>
        </nav>
        <div className="container">
          <div className="area list-area">
            <CreateBar />
            <NoteList />
          </div>
          <div className="area edit-area">
            <NotePart />
          </div>
        </div>
      </div>
    );
  }
}

export default Deskmark;
