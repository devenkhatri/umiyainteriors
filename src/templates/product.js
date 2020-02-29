import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      image,
      brand,
      categories,
    } = product
    return (
      <Layout>
        <SEO title="Product Name" />
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <Img fixed={image[0].fixed} />
          <h4>{productName}</h4>
        </div>
        <h1>{productName}</h1>
        <h4>Made by {brand.companyName.companyName}</h4>
        <div>
          <span>Price: ${price}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: productDescription.childMarkdownRemark.html,
            }}
          />
          <div>
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
          </div>
        </div>
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
        childMarkdownRemark {
          html
        }
      }
      price
      discountedPrice
      image {
        fixed(width: 50, height: 50) {
          base64
          src
          srcSet
          height
          width
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
