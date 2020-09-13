import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { AiFillLinkedin, AiFillHome, AiOutlineBell } from "react-icons/ai";
import { FaUserFriends, FaBriefcase, FaRegComments } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Navlink, Navdropdown } from "../components/index";
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
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 nav-form"
            />
          </Form>
          <Nav>
            <Navlink Icon={AiFillHome} title="home" />
            <Navlink Icon={FaUserFriends} title="my network" />
            <Navlink Icon={FaBriefcase} title="jobs" />
            <Navlink Icon={FaRegComments} title="Messages" />
            <Navlink Icon={AiOutlineBell} title="Notifications" />
            <Navdropdown
              title="me"
              img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <Navdropdown
              title="work"
              cls="nav-divider-right"
              img={BsFillGrid3X3GapFill}
            />
            <Navlink title="Try premium free for 1 month" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
