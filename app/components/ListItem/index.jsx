import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  item: PropTypes.object.isRequired,
  selectItem: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

function ListItem({item, selected, selectItem}) {
  let listItemClass = selected ? "list-item " + "selected" : "list-item";
  let time = new Date(item.time).toDateString();
  return (
    <div className ="list-item-component" onClick={() => selectItem(item.id)}>
      <div className ={listItemClass}>
        {item.title}
        <span className ="time"> {time} </span>
      </div>
    </div>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;
