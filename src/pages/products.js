import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import BuyingButton from "../components/buyingbutton"

const ProductPage = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="Products" />
      <PageHeader />
      <h1>All Products Listing Page</h1>
      <CardDeck className="pt-5 d-flex align-content-start flex-wrap bd-highlight">
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
      </CardDeck>

      <CardDeck className="pt-5 d-flex align-content-start flex-wrap bd-highlight">
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton type="info" /></Card.Footer>
        </Card>
      </CardDeck>

    </Layout>
  )
}

export default ProductPage
