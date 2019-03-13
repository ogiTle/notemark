import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/index';

const propTypes = {
  items: PropTypes.array.isRequired,
  selectedId: PropTypes.number,
};

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemsContent = this.props.items.map((item, i) => {
      return (
        <ListItem
          item={item}
          key={i}
          selected={this.props.selectedId === item.id ? true : false}            
        />
      );
    })
    return (
      <div>
        {itemsContent}
      </div>
    );
  }
}

List.propTypes = propTypes;

export default List;
