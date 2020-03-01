import React from "react"
import { Link } from "gatsby"
import { CardDeck, Card } from 'react-bootstrap';

const NewArrivals = () => {

  return (
    <div className="pt-5">
      <h3 className="text-center p-4">Best Sellers</h3>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
      </CardDeck>
    </div>
  )
}

export default NewArrivals
