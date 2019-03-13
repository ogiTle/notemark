import React from 'react';
import CreateBar from '../CreateBar/index';
import List from '../List/index';
import Viewer from '../Viewer/index';
import Editor from '../Editor/index';
import store from '../../store';
import {PAGE_STATE} from '../../actions/index';

import './style.scss';


class Deskmark extends React.Component {
  constructor(props) {
    super(props);

    var that = this;
    this.state = {...store.getState().itemReducer};
    store.subscribe(() => {
      that.setState({...store.getState().itemReducer});
    });
  }

  render() {
    let editAreaPage = null;
    var selectedItem = this.state.selectedId && this.state.items.find(item => item.id === this.state.selectedId);

    switch(this.state.currentState) {
      case PAGE_STATE.HOME:
        editAreaPage = (<h2> Select an item from left part ...</h2>);
        break;
      case PAGE_STATE.EDITING:
        editAreaPage = (<Editor item={selectedItem} />);
        break;
      case PAGE_STATE.VIEWING:
        editAreaPage = (<Viewer item={selectedItem} />);
        break;
    }

    return (
      <div className="deskmark-component">
        <nav className="nav-bar">
          <a className="nav-title" href="#"> Deskmark App </a>
        </nav>
        <div className="container">
          <div className="area list-area">
            <CreateBar />
            <List items={this.state.items} selectedId={this.state.selectedId} />
          </div>
          <div className="area edit-area">
            {editAreaPage}
          </div>
        </div>
      </div>
    );
  }


}

export default Deskmark;
