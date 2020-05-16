import axios from "axios";
import React from "react";
import "./App.css";




class PageManager extends React.Component {
  constructor(props) {
    super();
  }

  state = {
    userid: "",
    userhandle: "",
    userdescription: "",
    linktitle: "",
    linktarget: "",
    links: []
  };

  componentDidMount = () => {
    this.getLinks();

    console.log("mounted!");
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    // this.setState()
  };

  // submit = (event) => {
  //   event.preventDefault(); // prevent browser from refreshing

  //   const payload = {
  //     title: this.state.title,
  //     url: this.state.url,
  //   };

  //   axios({ url: "/api/save", method: "POST", data: payload })
  //     .then(() => {
  //       console.log("Data has been sent to server");
  //       this.resetUserInputs();
  //       this.getBlogPost();
  //     })
  //     .catch(() => {
  //       console.log("Internal server error");
  //     });
  // };

  getLinks = () => {
    axios
      .get("/api/userlink")
      .then((response) => {
        const data = response.data;
        this.setState({ links: data });
        console.log("Data has been received!!");
      })
      .catch(() => {
        alert("Error retrieving link data");
      });

    const userfetchlist = {
      userhandle: "kfc",
      userdescription: "this is KFC description",
      userid: "1233"
    }

   this.setState({
      userhandle: userfetchlist.userhandle,
      userid: userfetchlist.userid,
      userdescription: userfetchlist.userdescription
  
    });

    // const userfetchlist = {
    //   userhandle: "kfc",
    //   userdescription: "this is KFC description",
    //   userid: "1233",
    //   links: [
    //     {
    //       index: 1,
    //       linktitle: "website KFC",
    //       linktarget: "https://www.kfc.com",
    //     },
    //     {
    //       index: 2,
    //       linktitle: "instagram KFC",
    //       linktarget: "https://www.instagram.com/kfcindonesia/?hl=en",
    //     },
    //     {
    //       index: 3,
    //       linktitle: "facebook KFC",
    //       linktarget: "https://www.facebook.com/kfcindonesia/",
    //     },
    //   ],
    // };

    // this.setState({
    //   userhandle: userfetchlist.userhandle,
    //   userid: userfetchlist.userid,
    //   userdescription: userfetchlist.userdescription,
    //   links: userfetchlist.links,
    // });
  };

  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // };

  // displayBlogPost = (posts) => {
  //   if (!posts.length) return null;

  //   return posts.map((post, index) => (
  //     <div className="container" key={index}>
  //       <a className="link-item-container" href={post.url}>
  //         <div>{post.title}</div>
  //       </a>
  //     </div>
  //   ));
  // };

  submit = (event) => {
    event.preventDefault(); // prevent browser from refreshing

    const payload = {
      linktitle: this.state.linktitle,
      linktarget: this.state.linktarget,
      userid: this.state.userid,
    };

    axios({ url: "/api/userlink/save", method: "POST", data: payload })
      .then(() => {
        // console.log("Data has been sent to server");
        alert("data sent to server");
        // this.resetUserInputs();
        this.getLinks();

      })
      .catch(() => {
        console.log("Internal server error");
      });
  };





  displayLinks = (links) => {
    if (!links.length) return null;

    return links.map((links, index) => (
      <div className="container" key={index}>
        <a className="link-item-container" href={links.linktarget}>
          <div>{links.linktitle}</div>
        </a>
      </div>
    ));
  };





  render() {
    console.log("State: ", this.state);
    return (
      <div>
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-12">
            <div className="col-start-3 col-span-8 text-left">
              <h1 className="font-bold text-2xl">Manager page</h1>

              {/* userid: {singleitem.userid}     */}

              {/* Later will be detected from auth */}
              <h2> Your current username: {this.state.userhandle}</h2>
              <h3>Your current Description: {this.state.description}</h3>
            </div>
            <div className="col-start-3 col-span-8 text-left">
              <div className=" rounded overflow-hidden shadow-lg bg-white">
                <div className="px-6 py-4">
                  <div className="text-gray-700 text-base">
                    <form onSubmit={this.submit}>
                      <div className="form-input">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="linktitle"
                        >
                          Link title:
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Link Title"
                          type="text"
                          name="linktitle"
                          value={this.state.linktitle}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="form-input">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="linktarget"
                        >
                          link Url target:
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Link Target"
                          name="linktarget"
                          cols="30"
                          rows="10"
                          value={this.state.linktarget}
                          onChange={this.handleChange}
                        />
                      </div>

                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-start-3 col-span-8 text-left">
              <div>
                Your Current links:
                <br />
                {this.displayLinks(this.state.links)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageManager;
