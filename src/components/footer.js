import React from "react"

const Footer = () => {

  return (
    <div>
      <footer>
            © {new Date().getFullYear()} Umiya Interiors , Built with
        {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Footer
