import React from "react";
import axios from "axios";


//Assets Component imports 
import ImageCard from "./components/ImageCard";


//Route Components Imports
import Nav from "./NavBar";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home";
import itemDetail from "./itemdetail";
import Rickvian from "./Rickvian";
import Userpage from "./Userpage";
import PageManager from "./PageManager";


// import BlogPage from "./BlogPage"; bug, later will fix


//MOVE ALL ROUTE TO INDEX.JS!


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends React.Component {
  state = {
    title: "",
    body: "",
    posts: [],
    links: [],
    user: "",
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Data has been received!!");
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

 
 
  resetUserInputs = () => {
    this.setState({ title: "", body: "" });
  };

  displayBlogPost = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div className="container" key={index}>
        <a className="link-item-container" href={post.url}>
          <div>{post.title}</div>
        </a>
      </div>
    ));
  };




  render() {
    // console.log("State: ", this.state);

    return (
      <Router>
        <div className="app">


          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about" exact component={About} />
            
            <Route path="/abou2" exact component={About} />
            
            <Route path="/about4" exact component={About} />
            
            <Route path="/about5" exact component={About} />

            <Route path="/shop" exact component={Shop} />
            <Route path="/rickvian" exact component={Rickvian} />

            <Route path="/manage" component={PageManager} />

            <Route path="/shop/:id" component={itemDetail} />

            {/* <Route path="/blog" component={BlogPage} /> */}
            {/* under construction  */}

            <Route path="/:userhandle" component={Userpage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
