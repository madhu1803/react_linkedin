import React, { Component } from "react";
import { Navibar, FeedLeftSidebar, FeedMiddlePost } from "../components/index";
export default class Feed extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <div className="container feed-container">
          <div className="row">
            <div className="col-lg-3 left-feed-container">
              <FeedLeftSidebar />
            </div>
            <div className="col-lg-6 middle-feed-container">
              <FeedMiddlePost />
            </div>
            <div className="col-lg-3 right-feed-container">hello</div>
          </div>
        </div>
      </div>
    );
  }
}
