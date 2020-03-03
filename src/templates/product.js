import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Row, Col, Carousel, Card } from "react-bootstrap"
import BuyingButton from "../components/buyingbutton"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ProductTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulProduct
    const {
      productName: { productName },
      productDescription,
      price,
      discountedPrice,
      image,
      brand,
      categories,
    } = product
    return (
      <Layout>
        <SEO title={`Product: ${productName}`} />
        <PageHeader title={productName} />
        
        <Container fluid className="p-3">
        <Row>
          <Col>
            <Carousel>
              {image && image.map((item,index) => (
                <Carousel.Item>
                  <Img
                    className="d-block w-100"
                    fluid={item.fluid}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={7}>
            <Card>
              <Card.Body>
                <h2>{productName}</h2>
                <h4>Made by {brand.companyName.companyName}</h4>
                <Card.Title className="text-muted">
                  {discountedPrice && discountedPrice > 0 ? (
                            <>
                              <del>${price}</del><span className="text-primary"> ${discountedPrice}</span>
                            </>
                          ) : (
                              <>${price}</>
                            )
                          }
                </Card.Title>
                <Card.Text>
                  {documentToReactComponents(productDescription.json)}
                </Card.Text>
                <BuyingButton />
              </Card.Body>
              <Card.Footer>
                <span>See other: </span>
                <ul>
                  {categories.map((category, i) => (
                    <li key={i}>
                      <Link key={i} to={`/categories/${category.slug}`}>
                        {category.title.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      </Layout>
    )
  }
}

ProductTemplate.propTypes = propTypes

export default ProductTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      productName {
        productName
      }
      productDescription {
        json
      }
      price
      discountedPrice
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      brand {
        companyName {
          companyName
        }
      }
      categories {
        id
        slug
        title {
          title
        }
      }
    }
  }
`
