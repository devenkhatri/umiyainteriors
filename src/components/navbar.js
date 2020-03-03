import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown, Form, InputGroup, FormControl } from 'react-bootstrap';
import { IoMdSearch } from "react-icons/io"

const Navigationbar = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}UMIYA <span className="text-primary">INTERIOR</span>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
          <Form inline>
            <InputGroup>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1"><IoMdSearch /></InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigationbar
