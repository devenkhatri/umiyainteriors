import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

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

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }, { lightness: 17 }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#dedede" }, { lightness: 21 }]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 16 }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#333333" },
              { lightness: 40 }
            ]
          },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

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
                  <br></br>
                </p>
                <Form id="contact-form" method="post" role="form">
                  <label>Your name</label>
                  <InputGroup
                    className="input-group-focus"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
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
                        <i className="now-ui-icons ui-1_email-85"></i>
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
                        <i className="now-ui-icons tech_mobile"></i>
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
                </Form>
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
        <MapWrapper
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
