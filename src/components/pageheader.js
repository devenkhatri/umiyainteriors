import React from "react";
import { Card } from "react-bootstrap"

function PageHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-mini">
        <Card className="bg-dark text-white">
          <Card.Img className="page-header-image" src="/banner-1200-200.png" alt="Card image" ref={pageHeader} />
          <Card.ImgOverlay>
            <Card.Title className="text-center">Page title</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}

export default PageHeader;
