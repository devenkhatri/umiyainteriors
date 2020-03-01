import React from "react"
import { Link } from "gatsby"
import Sticky from "react-stickynode"
import { Card } from "react-bootstrap"
import Navigationbar from "./navbar"
import ScrollupButton from "./scrollupbutton"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {

  return (
    <div>
      <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
        <Navigationbar />
      </Sticky>
      <Card border="light">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <main>{children}</main>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"><Footer /></Card.Footer>
      </Card>
      <ScrollupButton />
    </div>
  )
}

export default Layout
