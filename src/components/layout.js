
import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>
      <div
       className="layout"
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            marginLeft:  `30px`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with Gatsby
          
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
