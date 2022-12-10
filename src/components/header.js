import * as React from "react"
import { Link } from "gatsby"
import "./component.css"


const Header = ({ siteTitle }) => (
  <header >
    <div classname="header">
    <Link
      to="/"
     activeStyle={{color: "dark-blue",
    textDecoration: "none"}}
    >
      Portfolio
    </Link>
    </div>
    <h1>SB</h1>
  </header>
)


export default Header
