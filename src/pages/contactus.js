import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaRegUser, FaMailBulk, FaMobileAlt } from "react-icons/fa"

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

const ContactusPage = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="Contact Us" />

      <div className="main">
        <div className="contact-content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <h2 className="title">Send us a message</h2>
                <p className="description">
                  You can contact us with anything related to our Products.
                    We'll get in touch with you as soon as possible. <br></br>
                </p>
                <form id="contact-form" method="post" role="form" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact-form" />
                  <label>Your name</label>
                  <InputGroup
                    className="input-group-focus"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FaRegUser />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      aria-label="Your Name..."
                      autoComplete="name"
                      placeholder="Your Name..."
                      type="text"
                    ></Input>
                  </InputGroup>
                  <label>Email address</label>
                  <InputGroup
                    className="input-group-focus"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FaMailBulk />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      aria-label="Email Here..."
                      autoComplete="email"
                      placeholder="Email Here..."
                      type="email"
                    ></Input>
                  </InputGroup>
                  <label>Phone</label>
                  <InputGroup
                    className="input-group-focus"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FaMobileAlt />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      autoComplete="number"
                      placeholder="Number Here..."
                      type="text"
                    ></Input>
                  </InputGroup>
                  <FormGroup>
                    <label>Your message</label>
                    <Input
                      id="message"
                      name="message"
                      rows="6"
                      type="textarea"
                    ></Input>
                  </FormGroup>
                  <div className="submit text-center">
                    <Button
                      className="btn-raised btn-round"
                      color="info"
                      defaultValue="Contact Us"
                      type="submit"
                    >
                      Contact Us
                      </Button>
                  </div>
                </form>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <div className="info info-horizontal mt-5">
                  <div className="icon icon-info">
                    <i className="now-ui-icons location_pin"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                      Plot No. 905/1, <br></br>
                      Nr. Hyundai Show Room, <br></br>
                      GIDC, Sector-28, <br></br>
                      Gandhinagar - Gujarat
                      </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons tech_mobile"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Rajiv Soni <br></br>
                      +91 79 23211927 <br></br>
                      Mon - Sat, 9:30-19:30
                      </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="big-map" id="contactUs2Map">
        <div
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBd3PjUqq81lIOfBPYXrQGWwK5T4ystZjA"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </Layout>
  )
}

export default ContactusPage
