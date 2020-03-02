import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';

const ExploreCategories = ({ data }) => {

  return (
    <div className="pt-5">
      <h3 className="text-center p-4">Explore Our Furniture Range (All Categories)</h3>
      <div>
        <Row className="d-inline-flex flex-row p-4 flex-wrap">
          {data.map(({ node }, i) => (
            <Col className="col-lg-3  mb-4">
              <Card className="w-100" key={node.id}>
                <Img fluid={node.icon.fluid} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ExploreCategories
