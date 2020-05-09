import React from "react";
import axios from "axios";
import "./App.css";

import Nav from "./NavBar";
import About from "./About";
import Shop from "./Shop";
import itemDetail from "./itemdetail";

import Rickvian from "./Rickvian";

import Userpage from "./Userpage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => (
  <div className="thisishomepage Component">
    <h1>Homepage thhis is component</h1>
  </div>
);

class App extends React.Component {
  state = {
    title: "",
    body: "",
    posts: [],
    url: "",
    user: ""
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

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault(); // prevent browser from refreshing

    const payload = {
      title: this.state.title,
      url: this.state.url,
    };

    axios({ url: "/api/save", method: "POST", data: payload })
      .then(() => {
        console.log("Data has been sent to server");
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log("Internal server error");
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
    console.log("State: ", this.state);

    // JSX
    return (
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
           

            <Route path="/about" exact component={About} />

            <Route path="/shop" exact component={Shop} />
            <Route path="/rickvian" exact component={Rickvian} />

            <Route path="/shop/:id" component={itemDetail} />
            <Route path="/:userhandle" component={Userpage} />
        

            
            
          </Switch>

          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h2>Welcome my practice app</h2>
          <form onSubmit={this.submit}>
            <div className="form-input">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-input">
              <input
                placeholder="link"
                name="url"
                cols="30"
                rows="10"
                value={this.state.url}
                onChange={this.handleChange}
              />
            </div>

            <button>Submit</button>
          </form>

          <div className="profile-header">
            <span>@</span>Rickvian
            <div>I am web developer</div>
          </div>
          <div> {this.displayBlogPost(this.state.posts)} </div>

          <div className="wa-floating-button"></div>
        </div>
      </Router>
    );
  }
}

export default App;
