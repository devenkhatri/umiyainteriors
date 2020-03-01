import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import ExploreCategories from "../components/explorecategories"
import NewArrivals from "../components/newarrivals"
import BestSellers from "../components/bestsellers"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Product = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/products/${node.slug}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
        }}
      >
        <div>
          {node.image[0].fixed.src && (
            <Img style={{ margin: 0 }} fixed={node.image[0].fixed} />
          )}
        </div>
        <div style={{ flex: 1 }}>{node.productName.productName}</div>
      </div>
    </Link>
  </div>
)

class IndexPage extends React.Component {
  render() {
    const allProductEdges = this.props.data.allContentfulProduct.edges
    const allCategoryEdges = this.props.data.allContentfulCategory.edges
    return (
      <Layout>
        <SEO title="Homepage" />
        <Banner />
        <ExploreCategories data={allCategoryEdges} />
        <NewArrivals />
        <BestSellers />
        <div>
          <h3>en-US</h3>
          {allProductEdges.map(({ node }, i) => (
            <Product node={node} key={node.id} />
          ))}
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

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
          image {
            fixed {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    allContentfulCategory {
      edges {
        node {
          id
          slug
          title {
            title
          }
          icon {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
