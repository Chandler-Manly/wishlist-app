import React from 'react';
import list from "../list.json";
import Item from "./Item";
import "./List.css"
import { useState } from "react";


function List(props) {

  const [items, setItems] = useState(list);
  const up = -1 
  const down = +1

  const handleMove = (name, direction) => {
    const position = items.findIndex((i) => i.name === name)
    if (position < 0) {
      return
      // eslint-disable-next-line
    } else if (direction === up && position === 0 || direction === down && position === items.length - 1) {
      return
    }
    const item = items[position]
    const newItems = items.filter((i) => i.name !== name)
    newItems.splice(position + direction, 0, item)
    setItems(newItems)
  }

  return (
    <div className="item-containers">
      
      <Item items={items}
        handleMove={handleMove} />
      </div>
  );
}

export default List;