import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import ExploreCategories from "../components/explorecategories"
import Aboutus from "../components/about"
import OurCatalogues from "../components/ourcatalogues"
import NewArrivals from "../components/newarrivals"
import BestSellers from "../components/bestsellers"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const homepageData = this.props.data.contentfulHomepage
    const allProductEdges = this.props.data.allContentfulProduct.edges
    const allCategoryEdges = this.props.data.allContentfulCategory.edges
    return (
      <Layout>
        <SEO title="Homepage" />
        <Banner data={homepageData.bannerImages} />
        <ExploreCategories data={allCategoryEdges} />
        <OurCatalogues />
        <NewArrivals data={homepageData.newArrivals} />
        <BestSellers data={homepageData.bestSellers}/>
        <Aboutus data={homepageData.aboutus} />
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
    allContentfulCategory(sort: {fields: updatedAt, order: DESC}) {
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
    contentfulHomepage {
      bannerImages {
        title
        fluid (maxWidth: 1200, maxHeight: 400, resizingBehavior: CROP) {
          src
        }
      }
      aboutus {
        json
      }
      bestSellers {
        slug
        productName {
          productName
        }
        price
        discountedPrice
        image {
          fluid {
            src
          }
        }
      }
      newArrivals{
      slug
      productName {
        productName
      }
      price
      discountedPrice
      image {
        fluid {
          src
        }
      }
    }
    }
  }
`
