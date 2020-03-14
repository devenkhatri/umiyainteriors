import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Jumbotron, Button, Card } from 'react-bootstrap';

const OurCatalogues = ({ data }) => {

    return (
        <Jumbotron>
            <Card.Header className="bg-warning">
                <Card.Title>e-Catalogues</Card.Title>
            </Card.Header>
            <Card.Body>
                Browse through all the product range once in our e-catalogues. E-Catalogues can also be downloaded for your offline reference.
            </Card.Body>
            <Card.Footer>
                <Button variant="info" href="/catalogues">View Catalogues</Button>
            </Card.Footer>
        </Jumbotron>
    )
}

export default OurCatalogues
