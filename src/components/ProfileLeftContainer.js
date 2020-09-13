import React, { Component } from "react";
import { ProfileCard, Btn } from "../components/index";
import { Card, Alert } from "react-bootstrap";

export default class ProfileLeftContainer extends Component {
  render() {
    return (
      <div>
        <Card className="text-capitalize profile-left-container">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1599918542383-589616611daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            height="200"
            style={{ objectFit: "cover" }}
          />
          <Card.Body>
            <Btn title="Add Profile Section" />
            {/* <Btn title="Add Profile Section" /> */}
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
            <Alert variant="light" dismissible className="alrt-container">
              <p className="alert-text pt-4">
                <strong>Show recruiters when you are open to work -</strong>
                you control who sees this
              </p>
              <small>
                <a href="#">Get started</a>
              </small>
            </Alert>
          </Card.Body>
        </Card>
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }
}
