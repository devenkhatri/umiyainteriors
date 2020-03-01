import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';

const ExploreCategories = ({ data }) => {

  return (
    <div className="pt-5">
      <h3 className="text-center p-4">Explore Our Furniture Range (All Categories)</h3>
      <Container className="">
        <Row className="d-inline-flex flex-row flex-wrap">
          <Col className="col-lg-3">
            {data.map(({ node }, i) => (
              <Card className="col-lg-3" key={node.id}>
                <Img fluid={node.icon.fluid} />
              </Card>
            ))}
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
          <Col className="col-lg-3">
            <Card.Text>Field-Item</Card.Text>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row >
          <CardDeck className="d-inline-flex flex-row flex-wrap w-100">
            {data.map(({ node }, i) => (
              <Card className="col-lg-3" key={node.id}>
                <Img fluid={node.icon.fluid} />
              </Card>
            ))}
            <Card>
              <Card.Img className="col-lg-3" variant="top" src="/img-600-400.png" />
            </Card>
            <Card>
              <Card.Img className="col-lg-3" variant="top" src="/img-600-400.png" />
            </Card>
            <Card>
              <Card.Img className="col-lg-3" variant="top" src="/img-600-400.png" />
            </Card>
            <Card>
              <Card.Img className="col-lg-3" variant="top" src="/img-600-400.png" />
            </Card>
            <Card>
              <Card.Img className="col-lg-3" variant="top" src="/img-600-400.png" />
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </div>
  )
}

export default ExploreCategories
