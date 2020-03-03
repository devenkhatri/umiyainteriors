import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Media } from "react-bootstrap"
import BuyingButton from "../components/buyingbutton"

const DesignPage = ({ data, location }) => {

  const allProductEdges = data.allContentfulProduct.edges

  return (
    <Layout>
      <SEO title="UI Design" />
      
      <ul className="list-unstyled">
      {allProductEdges &&
              allProductEdges.map(({ node }, i) => (
  <Media as="li" key={i}>
    <Link to={`/products/${node.slug}`}>
    <img
      width={64}
      height={64}
      className="mr-3"
      src={node.image[0].fluid.src}
    />
    </Link>
    <Media.Body>
      <h5>{node.productName.productName}</h5>
      <h6>{node.sku}</h6>
      <p>
        {node.discountedPrice && node.discountedPrice > 0 ? (
                          <>
                            <del>${node.price}</del><span className="text-primary"> ${node.discountedPrice}</span> 
                          </>
                          ) : (
                            <>${node.price}</>
                          )
                        }
                      <BuyingButton type="info" />
      </p>
    </Media.Body>
  </Media>
  ))}

</ul>
    </Layout>
  )
}

export default DesignPage

export const pageQuery = graphql `
  query {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          productName {
            productName
          }
          sku
          price
          discountedPrice
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
