import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Suggestion } from "../components/index";
export default class FeedRightSidebar extends Component {
  render() {
    return (
      <div>
        <Card className="text-capitalize pt-3 pb-3 mb-3">
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Ready for your next opportunity?
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>

        <ListGroup>
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
        </ListGroup>
      </div>
    );
  }
}
