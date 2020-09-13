import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
export default function Suggestion(props) {
  let { isBtn = null, src, text, subtext } = props;
  let btn = null;
  if (isBtn)
    btn = (
      <Button
        variant="outline-primary"
        className="btn-sm"
        style={{ float: "right" }}
      >
        <AiOutlinePlus />
        Follow
      </Button>
    );
  return (
    <ListGroup.Item className="suggestion-container pb-4">
      <img src={src} class="img-rounded" width="36" height="36" />
      {btn}
      <div className="suggestion-content">
        <small>
          <strong style={{ fontSize: "13px" }}>{text}</strong>
        </small>
        <br />
        <small>{subtext}</small>
      </div>
    </ListGroup.Item>
  );
}
