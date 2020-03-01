import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import { Container, Row, Col, Carousel, Card } from "react-bootstrap"
import BuyingButton from "../components/buyingbutton"

const ProductDetailPage = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="Product Detail" />
      <PageHeader />

      <Container fluid className="p-3">
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img-600-400.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img-600-400.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img-600-400.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={7}>
            <Card>
              <Card.Body>
                <h2>Product Name</h2>
                <Card.Title className="text-muted">$ 786</Card.Title>
                <Card.Title className="mb-2">Description</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <BuyingButton />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProductDetailPage
