import React from 'react';
import axios from "axios";

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

const BlogPage = () =>{
    return (

        <div>
            <h2>Welcome my Blog Practice page</h2>
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
        
    )
}

// export default BlogPage;
