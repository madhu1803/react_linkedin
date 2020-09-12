import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import { FcComments } from "react-icons/fc";
import { RiShareForwardLine, RiSendPlaneLine } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import FeedPostIcon from "../components/FeedPostIcon";
export default class FeedMiddlePost extends Component {
  render() {
    return (
      <Card className="feed-middle-post-container">
        <Card.Title>Card Title</Card.Title>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1590270835086-1b46d5a01044?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p>
            <AiFillLike />
            <FcComments />
            <small className="text-muted ml-2">27 . 4 comments</small>
          </p>
          <hr />
          <div className="post-footer-icons text-muted text-capitalize">
            <FeedPostIcon Icon={AiFillLike} text="like" />
            <FeedPostIcon Icon={BiCommentDetail} text="comment" />
            <FeedPostIcon Icon={RiShareForwardLine} text="share" />
            <FeedPostIcon Icon={RiSendPlaneLine} text="send" />
          </div>
        </Card.Body>
      </Card>
    );
  }
}
