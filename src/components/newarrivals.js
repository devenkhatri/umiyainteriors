import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Button, CardDeck, Card } from 'react-bootstrap';

const NewArrivals = ({data}) => {

  return (
      <div className="pt-5">
        <h3 className="text-center p-4">New Arrivals</h3>
        <CardDeck>
          {data && data.map((node,index) => (
            <Card className="text-center">
              <Card.Header>
                <Link to={`/products/${node.slug}`}>
                  <Card.Title>{node.productName.productName}</Card.Title>
                </Link>
              </Card.Header>
              
              <Card.Body>
                <Link to={`/products/${node.slug}`}>
                  <Card.Img variant="top" src={node.image[0].fluid.src} />
                </Link>
              </Card.Body>
              <Card.Footer className="d-flex">
                <Card.Text className="text-muted mr-auto">
                  {node.discountedPrice && node.discountedPrice > 0 ? (
                    <>
                      <del>₹{node.price}</del><span className="text-primary"> ₹{node.discountedPrice}</span>
                    </>
                  ) : (
                      <>₹{node.price}</>
                    )
                  }
                </Card.Text>
                <Button href={`/products/${node.slug}`} className="ml-auto">View Details</Button>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>
      </div>
  )
}

export default NewArrivals
