import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';

const ExploreCategories = ({ data }) => {

  return (
    <div className="pt-5">
      <h3 className="text-center p-4">Explore Our Furniture Range (All Categories)</h3>
      <div>
        <Row className="p-4 flex-wrap">
          {data.map(({ node }, i) => (
            <div className="col-lg-3 mb-4">
              <Card className="h-100" key={node.id}>
                <Card.Header>{node.title.title}</Card.Header>
                <Link to={`/categories/${node.slug}/`}>
                  <Img fluid={node.icon.fluid} />
                </Link>
              </Card>
            </div>
          ))}
          <div className="col-lg-3  mb-4">
		        <Card className="h-100">
		          <Link to={`/products/`}>
			          <img src="/view-all.png" />
			        </Link>
		        </Card>
		      </div>
        </Row>
      </div>
    </div>
  )
}

export default ExploreCategories
