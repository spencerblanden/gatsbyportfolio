import * as React from "react"
import "./component.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Header = () => (
  <header className="header">
    <div className="headerLeft">
      <a href="/">
        <h1>SB</h1>
      </a>
    </div>
    <div className="headerRight">
      <a href="https://github.com/spencerblanden">
        <FontAwesomeIcon icon={faGithub} className='iconGH' />
     </a>
     <a href="/https://www.linkedin.com/in/spencer-blanden/">
       <FontAwesomeIcon icon={faLinkedin} className='iconLI'/>
     </a>
     <a href="https://youtu.be/dQw4w9WgXcQ">
       <FontAwesomeIcon icon={faQuestion}  className='iconQ'/>
     </a>
    </div>
  </header>
)


export default Header
