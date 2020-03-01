import React from "react"
import { Link } from "gatsby"
import { CardDeck, Card } from 'react-bootstrap';
import BuyingButton from "./buyingbutton"

const NewArrivals = () => {

  return (
    <div className="pt-5">
      <h3 className="text-center p-4">New Arrivals</h3>
      <CardDeck>
        <Card className="text-center">
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton /></Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted"><del>$ 683</del><span className="text-primary"> $500</span> </Card.Subtitle>
            <Card.Text>This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton /></Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/img-600-400.png" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="text-muted">$ 683</Card.Subtitle>
            <Card.Text>This is product description. This is product description. This is product description. This is product description</Card.Text>
          </Card.Body>
          <Card.Footer className="text-right"><BuyingButton /></Card.Footer>
        </Card>
      </CardDeck>
    </div>
  )
}

export default NewArrivals
