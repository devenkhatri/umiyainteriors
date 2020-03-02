import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import BuyingButton from "../components/buyingbutton"

const ProductPage = ({ data }) => {

  const allProductEdges = data.allContentfulProduct.edges
  
  return (
    <Layout>
      <SEO title="Products" />
      <PageHeader />
      <h1>All Products Listing Page</h1>
      
      <div>
            <Row className="d-flex flex-row p-4 flex-wrap">
            {allProductEdges &&
              allProductEdges.map(({ node }, i) => (
                <Col className="col-lg-3  mb-4">
                  <Card className="h-100 text-center" key={i}>
                    <Card.Header>
                      <Link to={`/products/${node.slug}`}>
                        <Card.Title>{node.productName.productName}</Card.Title>
                      </Link>
                      <Card.Subtitle className="text-muted">{node.sku}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                      <Link to={`/products/${node.slug}`}>
                        <Img variant="top" fluid={node.image[0].fluid} />
                      </Link>
                    </Card.Body>
                    <Card.Footer className="d-flex">
                      <Card.Text className="text-muted mr-auto">
                        {node.discountedPrice && node.discountedPrice > 0 ? (
                          <>
                            <del>${node.price}</del><span className="text-primary"> ${node.discountedPrice}</span> 
                          </>
                          ) : (
                            <>${node.price}</>
                          )
                        }
                      </Card.Text>
                      <BuyingButton className="ml-auto" type="info" />
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

    </Layout>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          productName {
            productName
          }
          sku
          price
          discountedPrice
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
