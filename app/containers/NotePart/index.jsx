import { connect } from 'react-redux';
import NotePanel from '../../components/NotePanel/index';
import * as Actions from '../../actions/index';

var mapStateToProps = state => { 
  let items = state.itemReducer.items;
  let selectedId = state.itemReducer.selectedId;
  let selectedItem = selectedId && items.find(item => item.id === selectedId);
  return {
    item: selectedItem,
    currentState: state.itemReducer.currentState
  }
};

var mapDispatchToProps = dispatch => {
  return {
    onEditItem: function(id) {
      dispatch(Actions.editItem(id));
    },
    onDeleteItem: function(id) {
      dispatch(Actions.deleteItem(id));
    },
    onCancelClick: function(itemId) {
      if(itemId) {
        dispatch(Actions.selectItem(itemId));
      } else {
        dispatch(Actions.goToHome());
      }
    },
    onSaveClick: function(item) {
      dispatch(Actions.saveItem(item));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePanel); 
