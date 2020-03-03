import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GoLocation, GoDeviceMobile } from "react-icons/go"

// reactstrap components
import {
  Button,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";

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
                <form id="contact-form" action="/emailsuccess" method="post" role="form" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact-form" />
                  <Form.Group controlId="formBasicName">
                    <Form.Control name="name" type="name" placeholder="Enter your name" required />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPhonenumber">
                    <Form.Control name="phonenumber" type="number" placeholder="Enter phone number" required />
                    <Form.Text className="text-muted">
                      We'll contact you on this number. We never share your phone number with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter your message here</Form.Label>
                    <Form.Control name="message" as="textarea" rows="6" />
                  </Form.Group>

                  <Button variant="success" type="submit">
                    Contact Us
                  </Button>
                </form>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
              <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <GoDeviceMobile/>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Rajiv Soni <br></br>
                      +91 79 23211927 <br></br>
                      Mon - Sat, 9:00 am - 7:00 pm<br></br>
                      Sunday Closed
                      </p>
                  </div>
                </div>
                <div className="info info-horizontal mt-5">
                  <div className="icon icon-info">
                    <GoLocation />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                      Plot No. 905/1, <br></br>
                      Nr. Hyundai Show Room, <br></br>
                      GIDC, Sector-28, <br></br>
                      Gandhinagar - Gujarat
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.6045717768607!2d72.6523447!3d23.2574723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2c78eaaaaaab%3A0x48702434ad275226!2sUmiya%20Interior!5e0!3m2!1sen!2sin!4v1583253217598!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen="true"></iframe>
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
