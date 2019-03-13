import React from 'react';
import CreateBar from '../CreateBar/index';
import List from '../List/index';
import Viewer from '../Viewer/index';
import Editor from '../Editor/index';

import './style.scss';

class Deskmark extends React.Component {
  constructor(props) {
    super(props);
    // temporary data
    const time = new Date().getTime();
    let items = [{
      'id': 1,
      'title': 'first',
      'content': 'first article',
      'time': time 
    }, {
      'id': 2,
      'title': 'second',
      'content': 'second article',
      'time': time 
    }, {
      'id': 3,
      'title': 'third',
      'content': 'second article',
      'time': time 
    }];

    this.stateValue = {
      'home': 'home',      
      'editing': 'editing',
      'viewing': 'viewing'
    };

    this.state = {
      items: items,
      selectedId: null,
      currentState: this.stateValue.home
    }

    this.selectItem = this.selectItem.bind(this);
    this.createItem = this.createItem.bind(this);
    this.editItem   = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem   = this.saveItem.bind(this);
  }

  selectItem(id) {
    if(!id) {
      this.setState({
        selectedId: id,
        currentState: this.stateValue.home
      });
    } else {
      this.setState({
        selectedId: id,
        currentState: this.stateValue.viewing
      });
    }
  }

  createItem() {
    this.setState({
      selectedId: null,
      currentState: this.stateValue.editing
    });
  }

  editItem(id) {
    this.setState({
      selectedId: id,
      currentState: this.stateValue.editing
    });
  }

  deleteItem(id) {
    this.setState({
      items: this.state.items.filter(item => item.id === id ? false : true),
      selectedId: null,
      currentState: this.stateValue.home
    });
  }

  saveItem(item) {
    let items = this.state.items;
    if(!item.id) {
      item.id = new Date().getTime();
      items.push(item);
    } else {
      items = items.map(_item => item.id === _item.id ? {..._item, ...item} : _item);
    }

    this.setState({
      items: items,
      selectedId: item.id,
      currentState: this.stateValue.viewing
    });
  }

  render() {
    let editAreaPage = null;
    var selectedItem = this.state.selectedId && this.state.items.find(item => item.id === this.state.selectedId);

    switch(this.state.currentState) {
      case this.stateValue.home:
        editAreaPage = (<h2> Select an item from left part ...</h2>);
        break;
      case this.stateValue.editing:
        editAreaPage = (<Editor item={selectedItem} saveItem={this.saveItem} selectItem={this.selectItem}/>);
        break;
      case this.stateValue.viewing:
        editAreaPage = (<Viewer item={selectedItem} editItem={this.editItem} deleteItem={this.deleteItem}/>);
        break;
    }

    return (
      <div className="deskmark-component">
        <nav className="nav-bar">
          <a className="nav-title" href="#"> Deskmark App </a>
        </nav>
        <div className="container">
          <div className="area list-area">
            <CreateBar selectItem={this.selectItem} createItem={this.createItem} />
            <List items={this.state.items} selectedId={this.state.selectedId} selectItem={this.selectItem} />
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
