import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store';
import * as Actions from '../../actions/index';

import './style.scss';

const propTypes = {
  item: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired
};

/*
function onSelectItem(id) {
  store.dispatch(Actions.selectItem(id));
}
*/

function ListItem({item, selected, onSelectItem}) {
  let listItemClass = selected ? "list-item " + "selected" : "list-item";
  let time = new Date(item.time).toDateString();
  return (
    <div className ="list-item-component" onClick={() => onSelectItem(item.id)}>
      <div className ={listItemClass}>
        {item.title}
        <span className ="time"> {time} </span>
      </div>
    </div>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;
