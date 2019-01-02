import React from 'react';
import PropTypes from 'prop-types';

import { render } from 'react-dom'

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
      {items.map(item => <li key={item} className="item">{item}</li>)}
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