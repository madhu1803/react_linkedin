import React from "react";
import { Nav } from "react-bootstrap";

export default function Navlink(props) {
  let { Icon, title } = props;
  let icon = null;
  icon = (
    <div className="nav-icon-center">
      <Icon className="nav-icon" />
    </div>
  );
  return (
    <Nav.Link href="#" className="text-capitalize">
      {Icon ? icon : null}
      {title}
    </Nav.Link>
  );
}
