import React from 'react';
import list from "../list.json";
import { useState } from "react";
import "./Item.css"


function Item(props) {

  const [items, setItems] = useState(list);
  console.log(items)
  const up = -1 
  const down = +1

  const handleMove = (name, direction) => {
    const position = items.findIndex((i) => i.name === name)
    // making sure 
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
    <div className="item-box">
      {items.map((item) => 
        <div className="item">
          <div className="name">{item.name}</div>
          <div className="description">{item.description}</div>
          <div className="buttons">
          <button onClick={()=> handleMove(item.name, up)}>Up |</button>
          <button onClick={() => handleMove(item.name, down)}>Down</button>
          </div>
      </div>)}
    </div>
  );
}

export default Item;