import React from "react";
import { ListGroup } from "react-bootstrap";

export default function FeedListGroup(props) {
  let { txt, Icon = null } = props;
  return (
    <div>
      <ListGroup.Item className="text-muted feed-list-group">
        <Icon className="mr-1" />
        {txt}
      </ListGroup.Item>
    </div>
  );
}
