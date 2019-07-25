import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store';
import * as Actions from '../../actions/index';

import './style.scss';

const proptypes = {
  item: PropTypes.object,
  onCancelClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onCancelClick(itemId) {
    this.props.onCancelClick(itemId);
  }

  onSaveClick(item) {
    let newItem = {
      ...item,
      title: this.refs.itemTitle.value,
      content: this.refs.itemContent.value,
      time: new Date().getTime()
    }; //very important, don't change state directlly.
    this.props.onSaveClick(newItem);
  }

  render() {
    let item = this.props.item || {title: '', content: ''};
    let saveButtonLabel = item.id ? "Save" : "Create";

    return (
      <div className="editor-component">
        <div className="title-bar">
          <input placeholder="type to add title ..." defaultValue={item.title} ref="itemTitle" />
          <button className="save" onClick={() => this.onSaveClick(item)}> {saveButtonLabel} </button>
          <button className="cancel" onClick={() => this.onCancelClick(item.id)}>Cancel</button>
        </div>
        <div className="content">
          <textarea placeholder="type to add content ..." defaultValue={item.content} ref="itemContent"/>
        </div>
      </div>
    );
  }

}

Editor.proptypes = proptypes;

export default Editor;

