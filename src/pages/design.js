import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import ExploreCategories from "../components/explorecategories"
import NewArrivals from "../components/newarrivals"
import BestSellers from "../components/bestsellers"

const DesignPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="UI Design" />
      <Banner/>
    </Layout>
  )
}

export default DesignPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
