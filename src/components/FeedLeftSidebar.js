import React, { Component } from "react";
import { ListGroup, Card } from "react-bootstrap";
import { FeedListGroup } from "../components/index";
import { BsHash } from "react-icons/bs";

export default class FeedLeftSidebar extends Component {
  render() {
    return (
      <div>
        <Card className="text-capitalize pt-3 pb-3 mb-3 ">
          <ListGroup>
            <small className="pl-3 mt-1 mb-1">Recent</small>
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <small className="text-primary pl-3 mt-1 mb-1">
              <strong>Groups</strong>
            </small>
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <small className="text-primary pl-3 mt-1 mb-1">
              <strong>Followed hashtags</strong>
            </small>
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
            <FeedListGroup txt="invitetoge" Icon={BsHash} />
          </ListGroup>
          <div style={{ textAlign: "center" }}>
            <small>
              <strong>Discover more</strong>
            </small>
          </div>
        </Card>
      </div>
    );
  }
}
