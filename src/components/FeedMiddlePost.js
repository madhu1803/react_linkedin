import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import { FcComments } from "react-icons/fc";
import { RiShareForwardLine, RiSendPlaneLine } from "react-icons/ri";
import { BiCommentDetail, BiDotsHorizontalRounded } from "react-icons/bi";
import { FeedPostIcon, Suggestion } from "../components/index";
export default class FeedMiddlePost extends Component {
  render() {
    return (
      <Card className="feed-middle-post-container">
        <BiDotsHorizontalRounded className="ml-auto mr-2 mt-1" />
        <Suggestion
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          text="prachi"
          subtext="HR||open for collaboration"
        />

        <Card.Body className="mt-0 pt-0">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1590270835086-1b46d5a01044?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        />
        <Card.Body>
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
