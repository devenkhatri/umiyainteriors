import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from 'react-bootstrap'
import PDFViewer from 'pdf-viewer-reactjs'

const propTypes = {
    data: PropTypes.object.isRequired,
}

class CategoryTemplate extends React.Component {

    render() {

        const catalogue = this.props.data.contentfulProductCatalogue
        const {
            title,
            cataloguePdf,
        } = catalogue

        return (
            <Layout>
                <SEO title={`Catalogue: ${title}`} />
                <Card>
                    <Card.Header className="bg-success text-center">{title}</Card.Header>
                    <Card.Body>
                        <object width="100%" height="500" type="application/pdf" data={cataloguePdf.file.url}></object>
                    </Card.Body>
                </Card>
            </Layout>
        )
    }
}

CategoryTemplate.propTypes = propTypes

export default CategoryTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProductCatalogue(slug: { eq: $slug }) {
        title
        cataloguePdf {
          file {
            url
          }
        }
    }
  }
`
