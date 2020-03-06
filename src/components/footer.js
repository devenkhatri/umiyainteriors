import React from "react"

const Footer = () => {

  return (
    <div>
      <footer className="d-flex">
        <div className="w-100">
          © {new Date().getFullYear()} Umiya Interior, Gandhinagar, Gujarat
        </div>
        <div className="w-100 text-right">Built with{` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
