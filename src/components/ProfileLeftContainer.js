import React, { Component } from "react";
import { ProfileCard } from "../components/index";
import { Card, Button } from "react-bootstrap";

export default class ProfileLeftContainer extends Component {
  render() {
    return (
      <div>
        <Card className="text-capitalize">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1599918542383-589616611daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            height="200"
            style={{ objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Madhu Mithaa</Card.Title>
            <Card.Subtitle className="mb-2 ">
              Full stack developer
            </Card.Subtitle>
            <Card.Text>
              Chennai , Tamil Nadu ,India
              <Card.Link href="#" className="ml-3">
                200+ Connections
              </Card.Link>
              <Card.Link href="#">contact info</Card.Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }
}
