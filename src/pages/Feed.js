import React, { Component } from "react";
import { Navibar, FeedLeftSidebar } from "../components/index";
export default class Feed extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <div className="container feed-container">
          <div className="row">
            <div className="col-lg-2 left-feed-container">
              <FeedLeftSidebar />
            </div>
            <div className="col-lg-6 middle-feed-container">hello</div>
            <div className="col-lg-3 right-feed-container">hello</div>
          </div>
        </div>
      </div>
    );
  }
}
