import React from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Aboutus = ({data}) => {

  return (
    <div className="text-center p-4">
      {documentToReactComponents(data.json)}
    </div>
  )
}

export default Aboutus
