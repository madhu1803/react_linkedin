import React from "react";
import { Card, Button } from "react-bootstrap";
import { Btn } from "../components/index";

export default function ProfileCard(props) {
  let { Icon, txt, subtext, isBtn } = props;
  let btn = null;
  btn = <Btn title1="Take quiz" title2="Not now" />;
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>
          {txt}
          <Icon style={{ float: "right" }} className="text-muted" />
        </Card.Title>
        <Card.Text>{subtext}</Card.Text>
        {isBtn ? btn : null}
      </Card.Body>
    </Card>
  );
}
