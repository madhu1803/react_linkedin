import React from "react";
import { Nav } from "react-bootstrap";

export default function Navlink(props) {
  let { Icon, title } = props;
  return (
    <Nav.Link href="#">
      <Icon className="home-icon" />
      {title}
    </Nav.Link>
  );
}
