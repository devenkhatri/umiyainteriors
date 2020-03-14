import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Alert, Row, Col, CardDeck, Card } from 'react-bootstrap';

const ProductCataloguePage = ({ data }) => {

    const allProductCatalogueEdges = data.allContentfulProductCatalogue.edges

    return (
        <Layout>
            <SEO title="ProductCatalogues" />

            <Container>
                <Row className="d-flex flex-row flex-wrap">
                    <Col><Card.Title>Product Catalogues</Card.Title></Col>
                </Row>
                <Row className="d-flex flex-row p-4 flex-wrap">
                    {allProductCatalogueEdges &&
                        allProductCatalogueEdges.map(({ node }, i) => (
                            <Alert variant="success" key={i}>
                                <Alert.Heading>{node.title}</Alert.Heading>
                                <hr />
                                <Link to={`/catalogue/${node.slug}`}>
                                    <Card.Title>Click Here to View</Card.Title>
                                </Link>
                            </Alert>
                        ))}
                </Row>
            </Container>

        </Layout>
    )
}

export default ProductCataloguePage

export const pageQuery = graphql`
  query {
    allContentfulProductCatalogue {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`
