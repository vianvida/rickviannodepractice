import React, { useState, useEffect } from "react";
import "./App.css";

function Userpage({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [userstatelist, setItem] = useState({
    links: [], //define the state
  });


  console.log(userstatelist);
  
  const fetchItem = () => {
    // console.log("fetchitem called");
  
    const userfetchlist = {
      userhandle: "kfc",
      description: "this is KFC description",
      userid: "1233",
      links: [
        {
          index: 1,
          linktitle: "website KFC",
          linktarget: "https://www.kfc.com",
        },
        {
          index: 2,
          linktitle: "instagram KFC",
          linktarget: "https://www.instagram.com/kfcindonesia/?hl=en",
        },
        {
          index: 3,
          linktitle: "facebook KFC",
          linktarget: "https://www.facebook.com/kfcindonesia/",
        },
      ],
    };
    // const userfetchlist = [
    //   {
    //     userhandle: "kkuldak.id",
    //     description:
    //       "Jakarta - Bogor - Bandung - Surabaya - Padang - Palembang - Medan - Pekanbaru Email: kkuldak.id@gmail.com Contact us via whatsapp: 081288648428",
    //     userid: "1233",
    //     links: {
    //       firstlink: "https://www.instagram.com/kkuldak.id/?hl=en",
    //     },
    //   },

    //   {
    //     userhandle: "teriyakipage",
    //     description: "welcome this is 2 page with beef",
    //     userid: "1234",
    //     links: {
    //       firstlink:
    //         "https://www.pcgamesn.com/wp-content/uploads/2018/08/fortnite-53-patch-notes-900x507.jpg",
    //     },
    //   },

    //   {
    //     userhandle: "onezo",
    //     description: "High quality Milk Tea with Unique Housemade Boba!",
    //     userid: "1235",
    //     links: {
    //       firstlink: "https://www.onezo.us/",
    //     },
    //   },
    // ];

    // return userfetchlist.find(function (data) {
    //   return data.userhandle == useridparam;
    // });

    // const singleuser = mockSpecificitemAPI(`${match.params.userhandle}`);

    // console.log("itemid: " + item);
    // console.log(item);

    setItem(userfetchlist);
  };

  // const elements = ["test", "tost", "tast"];
  console.log("userstate");
  console.log(userstatelist.links);
  // userstatelist.links.map((item)=>{ return item});

  console.log("isArray?: " + Array.isArray(userstatelist.links));
  return (
    <div>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-12">
          <div className="col-start-3 col-span-8 text-center">
            {/* userid: {singleitem.userid}     */}

            <h2> @{userstatelist.userhandle}</h2>
            <h3>{userstatelist.description}</h3>
       
          </div>

          <br />

          {userstatelist.links.map((item) => (
            <a
              href={item.linktarget}
              key={item.index}
              className="col-start-3 col-span-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4 block text-center"
            >
               {item.linktitle}
            </a>
          ))}
        </div>

        <div className="qliqin-logo-container">
          <div className="flex justify-center">
            <a href="/">
              <img className="qliqin-logo" src="/images/qliqinlogo-w.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userpage;
