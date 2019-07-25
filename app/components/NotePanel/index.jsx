import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../Editor/index';
import Viewer from '../Viewer/index';
import {PAGE_STATE} from '../../actions/index';

const propTypes = {
  item: PropTypes.object,
  currentState: PropTypes.string.isRequired
};

class NotePanel extends React.Component {

  render() {
    let notePanel = null;
    switch(this.props.currentState) {
      case PAGE_STATE.HOME:
        notePanel = (<h2> Select an item from left part ...</h2>);
        break;
      case PAGE_STATE.EDITING:
        notePanel = (<Editor 
                       item={this.props.item}
                       onCancelClick={this.props.onCancelClick}
                       onSaveClick={this.props.onSaveClick}
                     />);
        break;
      case PAGE_STATE.VIEWING:
        notePanel = (<Viewer
                       item={this.props.item} 
                       onEditItem={this.props.onEditItem}
                       onDeleteItem={this.props.onDeleteItem}
                     />);
        break;
    }

    return notePanel;
  }
}

NotePanel.propTypes = propTypes;


export default NotePanel;
