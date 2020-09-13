import React, { Component } from "react";
import {
  Navibar,
  ProfileLeftContainer,
  ProfileRightContainer,
} from "../components/index";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <div className="container feed-container">
          <div className="row">
            <div className="col-lg-8 left-profile-container">
              <ProfileLeftContainer />
            </div>
            <div className="col-lg-4 right-profile-container">
              <ProfileRightContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
