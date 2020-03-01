import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';

const ExploreCategories = ({ data }) => {

  return (
    <div className="pt-5">
      <h3 className="text-center p-4">Explore Our Furniture Range (All Categories)</h3>
      <Container>
        <Row className="d-flex flex-row flex-wrap">
          {data.map(({ node }, i) => (
            <Col className="d-flex col-lg-3 p-5 align-items-center">
              <Card className="w-100" key={node.id}>
                <Img fluid={node.icon.fluid} />
              </Card>
            </Col>
          ))}
          <Col className="d-flex col-lg-3 p-5 align-items-center">
            <Card className="w-100">
              <Card.Img variant="top" src="/img-600-400.png" />
            </Card></Col>
          <Col className="d-flex col-lg-3 p-5 align-items-center">
            <Card className="w-100">
              <Card.Img variant="top" src="/img-600-400.png" />
            </Card></Col>
          <Col className="d-flex col-lg-3 p-5 align-items-center">
            <Card className="w-100">
              <Card.Img variant="top" src="/img-600-400.png" />
            </Card></Col>
          <Col className="d-flex col-lg-3 p-5 align-items-center">
            <Card className="w-100">
              <Card.Img variant="top" src="/img-600-400.png" />
            </Card></Col>
          <Col className="d-flex col-lg-3 p-5 align-items-center">
            <Card className="w-100">
              <Card.Img variant="top" src="/img-600-400.png" />
            </Card></Col>
        </Row>
      </Container>
    </div>
  )
}

export default ExploreCategories
