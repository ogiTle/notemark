import React from 'react';
import PropTypes from 'prop-types'; 
import store from '../../store';
import * as Actions from '../../actions/index';

import './style.scss';

const propTypes = {
}

class CreateBar extends React.Component {
  constructor(props) {
    super(props);
    this.onHomeClick = this.onHomeClick.bind(this);
    this.onCreateNewClick = this.onCreateNewClick.bind(this);
  }

  render() {
    return (
      <div className="create-bar-component">
        {this._getHomContent()}
        {this._getCreateNewContent()}
      </div>
    );
  }

  // methods aubout creating content
  _getHomContent() {
    return (
      <div className="home"
           onClick={this.onHomeClick}>
      </div>
    );
  }

  _getCreateNewContent() {
    return (
      <div
        className="create-new"
        onClick={this.onCreateNewClick}>
        + Create New
      </div>
    );
  }

  onHomeClick() {
    store.dispatch(Actions.goToHome());
  }

  onCreateNewClick() {
    store.dispatch(Actions.createItem());
  }

}

//CreateBar.propTypes = propTypes;

export default CreateBar;
