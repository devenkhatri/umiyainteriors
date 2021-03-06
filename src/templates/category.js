import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Container, Row, Col, CardDeck, Card } from 'react-bootstrap';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class CategoryTemplate extends React.Component {

  render() {

    const category = this.props.data.contentfulCategory
    const {
      title: { title },
      product,
      icon,
    } = category
    const productsCount = product ? product.length : 0

    const iconImg = icon.fixed
    return (
      <Layout>
        <SEO title={`Category: ${title}`} />
        <div className="d-flex m-4">
          <Img
            style={{
              height: iconImg.height,
              width: iconImg.width,
            }}
            fixed={iconImg}
          />
          <h3 className="ml-4">Total <span className="text-primary">'{productsCount}'</span> Products found in <span className="text-primary">'{title}'</span> Category</h3>
        </div>

        <div>
          <div>
            <Row className="d-flex flex-row p-4 flex-wrap">
              {product &&
                product.map((p, i) => (
                  <div className="col-lg-3  mb-4">
                    <Card className="h-100 text-center" key={i}>
                      <Card.Header>
                        <Link to={`/products/${p.slug}`}>
                          <Card.Title>{p.productName.productName}</Card.Title>
                        </Link>
                      </Card.Header>
                      <Card.Body>
                        <Link to={`/products/${p.slug}`}>
                          <Img variant="top" fluid={p.image[0].fluid} />
                        </Link>
                      </Card.Body>
                      <Card.Footer className="d-flex">
                        <Card.Text className="text-muted mr-auto">
                          {p.discountedPrice && p.discountedPrice > 0 ? (
                            <>
                              <del>₹{p.price}</del><span className="text-primary"> ₹{p.discountedPrice}</span>
                            </>
                          ) : (
                              <>₹{p.price}</>
                            )
                          }
                        </Card.Text>
                        <Button href={`/products/${p.slug}`} className="ml-auto" variant="info">View Details</Button>
                      </Card.Footer>
                    </Card>
                  </div>
                ))}
            </Row>
          </div>
        </div>
      </Layout>
    )
  }
}

CategoryTemplate.propTypes = propTypes

export default CategoryTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      title {
        title
      }
      icon {
        fixed(width: 75) {
          base64
          src
          srcSet
          height
          width
        }
      }
      product {
        slug
          productName {
            productName
          }
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
`
