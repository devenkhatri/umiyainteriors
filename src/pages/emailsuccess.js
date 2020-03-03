import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron, Button } from "react-bootstrap"

const DesignPage = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="Thanks You" />

      <Jumbotron>
        <h1>Thank You!</h1>
        <p>
          We have received your details successfully. We would be soon reaching back to you.
        </p>
        <p>
          <Button href="/" variant="primary">Go Back</Button>
        </p>
      </Jumbotron>
    </Layout>
  )
}

export default DesignPage
