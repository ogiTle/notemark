import * as ActionTypes from '../actions/index';

const time = new Date().getTime();
let items = [{
  'id': 1,
  'title': 'first',
  'content': 'first article',
  'time': time 
}, {
  'id': 2,
  'title': 'second',
  'content': 'second article',
  'time': time 
}, {
  'id': 3,
  'title': 'third',
  'content': 'third article',
  'time': time 
}];

const initState = {
  items: items,
  selectedId: null,
  currentState: ActionTypes.PAGE_STATE.HOME
};

export default function itemsReducer(state = initState, action) {
  switch (action.type) {
    case ActionTypes.SELECT_ITEM:
     return  {...state, selectedId: action.id, currentState: ActionTypes.PAGE_STATE.VIEWING};
    case ActionTypes.CREATE_ITEM:
      return Object.assign({}, state, {selectedId: null, currentState: ActionTypes.PAGE_STATE.EDITING});
    case ActionTypes.DELETE_ITEM:
      return Object.assign({}, {
        items: state.items.filter(item => item.id === action.id ? false : true),
        selectedId: null,
        currentState: ActionTypes.PAGE_STATE.HOME
      });
    case ActionTypes.EDIT_ITEM:
      return {...state, selectedId: action.id, currentState: ActionTypes.PAGE_STATE.EDITING}
    case ActionTypes.SAVE_ITEM:
      var result = null;
      if(action.item.id) {
        result = Object.assign({}, {
          items: state.items.map(_item => _item.id === action.item.id ? {..._item, ...action.item} : _item),
          selectedId: action.item.id,
          currentState: ActionTypes.PAGE_STATE.VIEWING
        });
      } else {
        action.item.id = new Date().getTime();
        result = Object.assign({}, {
          items: [...state.items, action.item],
          selectedId: action.item.id,
          currentState: ActionTypes.PAGE_STATE.VIEWING
        });
      }
      return result;
    case ActionTypes.GO_TO_HOME:
      return Object.assign({}, state, {currentState: ActionTypes.PAGE_STATE.HOME});
    default:
      return state;
  }
}


