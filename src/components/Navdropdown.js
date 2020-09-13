import React from "react";
import { NavDropdown } from "react-bootstrap";

export default function Navdropdown(props) {
  let { img, title, cls } = props;
  return (
    <div className={`nav-icon-center ${cls ? cls : null} `}>
      <img src={img} className="rounded-circle pt-1" width="30" height="30" />{" "}
      <NavDropdown title={title} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
