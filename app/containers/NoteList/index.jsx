import { connect } from 'react-redux';
import List from '../../components/List/index';
import * as Actions from '../../actions/index';

var mapStateToProps = state => { 
  return {
    items: state.itemReducer.items,
    selectedId: state.itemReducer.selectedId
  }
};

var mapDispatchToProps = dispatch => {
  return {
    onSelectItem: function(id) {
      dispatch(Actions.selectItem(id));
    },
    fetchAll: function() {
      dispatch(Actions.fetchAll());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List); 
