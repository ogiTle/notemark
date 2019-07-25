import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import store from '../../store';
import * as Actions from '../../actions/index';
import { bindActionCreators } from 'redux';

import './style.scss';

const propTypes = {
  actions: PropTypes.exact({
    goToHome: PropTypes.func,
    createItem: PropTypes.func
  })
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
           onClick={() => this.props.actions.goToHome()}>
      </div>
    );
  }

  _getCreateNewContent() {
    return (
      <div
        className="create-new"
        onClick={() => this.props.actions.createItem()}>
        + Create New
      </div>
    );
  }

}

CreateBar.propTypes = propTypes;

const mapDispatchToProps = function(dispatch) {
  return {
    //onHomeClick: () => dispatch(Actions.goToHome()),
    //onCreateNewClick: () => dispatch(Actions.createItem())

    //using bindActionCreators
    actions: bindActionCreators({
      goToHome: Actions.goToHome, 
      createItem: Actions.createItem
    }, dispatch) 
  }
}


export default connect(null, mapDispatchToProps)(CreateBar);
