import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"
import Layout from "../layouts"

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
          paddingBottom: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2),
        }}
      >
        <div style={{ marginRight: rhythm(1 / 2) }}>
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
    const usProductEdges = this.props.data.us.edges
    return (
      <Layout>
        <div style={{ marginBottom: rhythm(2) }}>
          <h3>en-US</h3>
          {usProductEdges.map(({ node }, i) => (
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
    us: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          slug
          productName {
            productName
          }
          image {
            fixed(width: 75) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
