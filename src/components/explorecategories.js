import React from "react"
import { Link } from "gatsby"
import { Jumbotran, CardDeck, Card } from 'react-bootstrap';

const ExploreCategories = () => {

  return (
    <div className="pt-5">
      <h3 className="text-center p-4">Explore Our Furniture Range (All Categories)</h3>
      <CardDeck>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img-600-400.png" />
        </Card>
      </CardDeck>
    </div>
  )
}

export default ExploreCategories
