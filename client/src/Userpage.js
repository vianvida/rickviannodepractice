import React, { useState, useEffect } from "react";
import "./App.css";

function Userpage({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [singleitem, setItem] = useState({
    links: {},
  });

  const fetchItem = async () => {
    // console.log("fetchitem called");
    function mockSpecificitemAPI(useridparam) {
      const itemlist = [
        {
          userhandle: "kkuldak.id",
          description:"Jakarta - Bogor - Bandung - Surabaya - Padang - Palembang - Medan - Pekanbaru Email: kkuldak.id@gmail.com Contact us via whatsapp: 081288648428",
          userid: "1233",
          links: {
            firstlink:
              "https://www.instagram.com/kkuldak.id/?hl=en",
          },
        },

        {
          userhandle: "teriyakipage",
          description:"welcome this is 2 page with beef",
          userid: "1234",
          links: {
            firstlink:
              "https://www.pcgamesn.com/wp-content/uploads/2018/08/fortnite-53-patch-notes-900x507.jpg",
          },
        },

        {
          userhandle: "onezo",
          description:"High quality Milk Tea with Unique Housemade Boba!",
          userid: "1235",
          links: {
            firstlink:
              "https://www.onezo.us/",
          },
        },
      ];
      return itemlist.find(function (data) {
        return data.userhandle == useridparam;
      });
    }

    const singleuser = mockSpecificitemAPI(`${match.params.userhandle}`);

    // console.log("itemid: " + item);
    // console.log(item);

    setItem(singleuser);

  };

  return (
    <div>
      <h1>userid: {singleitem.userid}</h1>
      <h2>userhandle: {singleitem.userhandle}</h2>
      <h3>
        description: {singleitem.description}
      </h3>
      <a href={singleitem.links.firstlink}> This is first link</a>
    </div>
  );
}

export default Userpage;
