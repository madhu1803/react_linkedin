import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Suggestion, Video } from "../components/index";

export default class ProfileRightContainer extends Component {
  render() {
    return (
      <div>
        <Card className="text-capitalize pt-3 pb-3 mb-3">
          <ListGroup>
            <small>Add to your feed </small>
            <Suggestion isBtn={true} />
            <Suggestion isBtn={true} />
            <Suggestion isBtn={true} />
            <Suggestion isBtn={true} />
            <a href="#">View all recommendations</a>
          </ListGroup>
        </Card>
        <p>Add new skills with these courses free for 24 hrs</p>
        <Video
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          title="python code challenges"
          viewers="24,057"
        />
        <Video
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          title="open cv for python challenges"
          viewers="124,057"
        />
        <Video
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          title="python code challenges"
          viewers="24,057"
        />
      </div>
    );
  }
}
