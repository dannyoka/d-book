import React, { useState } from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const [limit, setLimit] = useState(5);
  const [numberOfItems, setNumberOfItems] = useState(props.data.length);
  const filteredList = props.data.filter((item) => {
    return item.name.toLowerCase() === props.term.toLowerCase();
  });
  const list = () => {
    if (!props.term) {
      return props.data.map((link) => {
        return <ListItem info={link} key={link.name} />;
      });
    } else {
      return filteredList.map((link) => {
        return <ListItem info={link} key={link.name} />;
      });
    }
  };

  const limitedList = (limit) => {
    let i = 0;
    let myList = [];
    while (i < limit) {
      myList.push(list()[i]);
      i++;
    }
    return myList;
  };

  const renderButton = () => {
    if (numberOfItems > limit) {
      return (
        <button
          className="btn btn-primary"
          onClick={() => {
            setLimit(numberOfItems);
          }}
        >
          Load More
        </button>
      );
    }
    if (numberOfItems === limit) {
      return (
        <button
          className="btn btn-primary"
          onClick={() => {
            setLimit(5);
          }}
        >
          Show Less
        </button>
      );
    }
  };

  return (
    <div>
      <ul className="list-group">{limitedList(limit)}</ul>
      <p>Total number of items: {numberOfItems}</p>
      {renderButton()}
    </div>
  );
};

export default List;
