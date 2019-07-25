import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store';
import * as Actions from '../../actions/index';

import './style.scss';

const propTypes = {
  item: PropTypes.object.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};


class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.onEditItem = this.onEditItem.bind(this);
  }

  onEditItem() {
    this.props.onEditItem(this.props.item.id);
  }

  render() {
    return (
      <div className="viewer-component">
        <div className="title-bar">
          <h4 className="title"> {this.props.item.title} </h4>
          {/* two metheds for defining call back.*/}
          <button className="edit" onClick={this.onEditItem}>Edit</button>
          <button className="delete" onClick={ () => this.props.onDeleteItem(this.props.item.id) }>Delete</button>
        </div>
        <div className="content">{this.props.item.content}</div>
      </div>
    );
  }
}

Viewer.propTypes = propTypes;

export default Viewer;
