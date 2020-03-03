import React from "react"
import Img from "gatsby-image"
import { Carousel } from 'react-bootstrap';

const Banner = ({data}) => {
  
  return (
    <div>
      <Carousel>
        {data && data.map((image,index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.fluid.src}
              alt={image.title}
            />
            <Carousel.Caption>
              <h3>{image.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
