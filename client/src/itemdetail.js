import React, { useState, useEffect } from "react";
import "./App.css";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [singleitem, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    // console.log("fetchitem called");
    function mockSpecificitemAPI(itemid) {
      const itemlist = [
        {
          name: "item1",
          itemid: "1233",
          images: {
            transparent:
              "https://img.resized.co/dexerto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcL3RodW1ibmFpbHNcXFwvX3RodW1ibmFpbExhcmdlXFxcL2VzY3Vkby1mb3J0bml0ZS0xLmpwZ1wiLFwid2lkdGhcIjo2MjAsXCJoZWlnaHRcIjozNDcsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tXFxcL3BwbHVzLmltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcLzIwMTlcXFwvMTFcXFwvMTEyMTQ5NDNcXFwvcGxhY2Vob2xkZXIuanBnXCJ9IiwiaGFzaCI6Ijg2YWQyYjc4NGVjMGZmYjFiNmEzZGEwMjIzNTA1YWFmOTRkM2Y5MjUifQ==/new-shield-bubble-item-coming-to-fortnite-in-v10-20-update.jpg",
          },
        },

        {
          name: "item2",
          itemid: "1234",
          images: {
            transparent:
              "https://www.pcgamesn.com/wp-content/uploads/2018/08/fortnite-53-patch-notes-900x507.jpg",
          },
        },

        {
          name: "item3",
          itemid: "1235",
          images: {
            transparent:
              "https://www.thesun.co.uk/wp-content/uploads/2019/06/NINTCHDBPICT000498352390.jpg?w=620",
          },
        },
      ];
      return itemlist.find(function (data) {
        return data.itemid == itemid;
      });
    }

    const item = mockSpecificitemAPI(`${match.params.id}`);

    // console.log("itemid: " + item);
    // console.log(item);

    setItem(item);

  };

  return (
    <div>
      <h1>{singleitem.itemid}</h1>
      <img src={singleitem.images.transparent} />
    </div>
  );
}

export default Item;
