import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [itemliststate, setItems] = useState([]);

  const fetchItems = () => {
    console.log("fetch item start");

    const items = {
      items: [
        { name: "item1", itemid: "1233" },
        { name: "item12", itemid: "1234" },
        { name: "item3", itemid: "1235" },
      ],
    };

    console.log(items.items);
    setItems(items.items);
  };

  console.log(itemliststate);
  return (
    <div>
      <h1>Shop page</h1>
      {itemliststate.map((item) => (
        <h1 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
