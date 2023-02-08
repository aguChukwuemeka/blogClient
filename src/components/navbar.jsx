import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Menu from "./menu";

export default function navbar() {
  return (
    <Navbar
      className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900"
      expand="lg"
      style={{ top: "0", position: "fixed", width: "100%", zIndex: "1" }}
    >
      <Navbar.Brand as={Link} to="/">
        <img src={logo} width="14%" className="app-logo" alt="Beach Resort" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end">
        <Nav
          className="flex ml-auto my-3 my-lg-0 align-middle i__nav"
          style={{ maxHeight: "auto" }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/">
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            CONTACT
          </Nav.Link>
          <Nav.Link as={Link} to="/write" className="me-4">
            WRITE
          </Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="me-3" variant="outline-success">
              Search
            </Button>
          </Form>
        </Nav>
        <Menu />
      </Navbar.Collapse>
    </Navbar>
  );
}
