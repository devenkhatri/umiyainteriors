import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const DesignPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="UI Design" />
      <h1>UI Design</h1>
      <Banner/>
      <h2>Explore Our Furniture Range (All Categories)</h2>
      <h2>New Arrivals (Scrolling Cards 3)</h2>
      <h2>Our Best Sellers (Scrolling Cards 4)</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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
