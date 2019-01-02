import React from 'react';
import PropTypes from 'prop-types';

import { render } from 'react-dom'

import ListItem from './ListItem';

window.React = React //https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined?rq=1

/*
 Render a list of items
 @param {Object} props - List of items
 */
function List(props) {
  const { items } = props;
  if (!items.length) {
    // No Items on the list, render an empty message
    return <span className="empty-message">No items in list</span>;
  }

  return (
    <ul className="list-items">
      {items.map(item => <ListItem key={item} item={item} />)}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

List.defaultProps = {
  items: [],
};

export default List;