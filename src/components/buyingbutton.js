import React from "react"
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';

const BuyingButton = ({type}) => {

  let variant = "primary"
  if(type!=null) variant = type

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Buying Options</Popover.Title>
      <Popover.Content>
        Currently online buying option is not available. Visit <a href="/contactus">Contact Us</a> page to call or visit us.
      </Popover.Content>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant={variant}>Buying Options</Button>
      </OverlayTrigger>

    </div>
  )
}

export default BuyingButton
