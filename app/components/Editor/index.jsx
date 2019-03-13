import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const proptypes = {
  item: PropTypes.object,
  saveItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item || {title: '', content: ''};
    let saveButtonLabel = item.id ? "Save" : "Create";

    return (
      <div className="editor-component">
        <div className="title-bar">
          <input placeholder="type to add title ..." defaultValue={item.title} ref="itemTitle" />
          <button className="save" onClick={() => this._onSaveBtnClick(item)}> {saveButtonLabel} </button>
          <button className="cancel" onClick={() => this.props.selectItem(item.id)}>Cancel</button>
        </div>
        <div className="content">
          <textarea placeholder="type to add content ..." defaultValue={item.content} ref="itemContent"/>
        </div>
      </div>
    );
  }

  _onSaveBtnClick(item) {
    this.props.saveItem({
      ...item,
      title: this.refs.itemTitle.value,
      content: this.refs.itemContent.value,
      time: new Date().getTime()
    }); //very important, don't chante state directlly.
  }
}

Editor.proptypes = proptypes;

export default Editor;

