import React from 'react';
import PropTypes from 'prop-types'; 
import './style.scss';

const propTypes = {
  selectItem: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired
}

class CreateBar extends React.Component {
  constructor(props) {
    super(props);
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
           onClick={() => this.props.selectItem(null)}>
      </div>
    );
  }

  _getCreateNewContent() {
    return (
      <div
        className="create-new"
        onClick={() => this.props.createItem()}>
        + Create New
      </div>
    );
  }
}

CreateBar.propTypes = propTypes;

export default CreateBar;
