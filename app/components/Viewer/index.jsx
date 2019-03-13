import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired  
};

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="viewer-component">
        <div className="title-bar">
          <h4 className="title"> {this.props.item.title} </h4>
          <button className="edit" onClick={() => this.props.editItem(this.props.item.id)}>Edit</button>
          <button className="delete" onClick={() => this.props.deleteItem(this.props.item.id)}>Delete</button>
        </div>
        <div className="content">{this.props.item.content}</div>
      </div>
    );
  }
}

Viewer.propTypes = propTypes;

export default Viewer;
