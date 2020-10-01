import React from "react";

const ListItem = ({ info }) => {
  return (
    <a href={info.uri}>
      <li className="list-group-item" key={info.name}>
        {info.name}
      </li>
    </a>
  );
};

export default ListItem;
