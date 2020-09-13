import React from "react";
import { Card, Alert } from "react-bootstrap";
import { Btn } from "../components/index";

export default function ProfileCard(props) {
  let { Icon, txt, subtext, isBtn, isBorder, isAlert } = props;
  let btn = null,
    alert = null;
  btn = <Btn title1="Take quiz" title2="Not now" />;
  alert = (
    <div className="container">
      <Alert variant="secondary" className="alrt-container">
        <p>Change this and that and try again</p>
      </Alert>
    </div>
  );
  return (
    <Card className={` ${isBorder ? "profile-border-top" : null} mt-4`}>
      <Card.Body>
        <Card.Title>
          {txt}
          <Icon style={{ float: "right" }} className="text-muted" />
        </Card.Title>
        <Card.Text>{subtext}</Card.Text>
        {isAlert ? alert : null}
        {isBtn ? btn : null}
      </Card.Body>
    </Card>
  );
}
