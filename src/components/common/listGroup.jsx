import React from "react";

const ListGroup = props => {
  const { items, selectedGenre } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item._id}
          className={
            selectedGenre === item
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onListGroup(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
