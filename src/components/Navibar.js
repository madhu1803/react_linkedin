import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import { AiFillLinkedin, AiFillHome } from "react-icons/ai";
import { Navlink } from "../components/index";
export default class Navibar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar-container ">
        <Navbar.Brand href="#home">
          <AiFillLinkedin className="linkedin-icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Nav>
            <Navlink Icon={AiFillHome} title="home" />
            <Navlink Icon={AiFillHome} title="home" />
            <Navlink Icon={AiFillHome} title="home" />
            <Navlink Icon={AiFillHome} title="home" />

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#home">Try premium for free</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
