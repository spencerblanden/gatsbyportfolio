import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./component.css"


const Card = ({title, blurb, img, alt, className}) => {
    return (
            <div className={`card ${className}`}>
                <img className="cardImg" src={img} alt={alt}></img>
                <div className="cardText">
                    <h2>{title}</h2>
                    <p>{blurb}</p>
                </div>
            </div>
    )  
    }

    Card.propTypes = {
        title: PropTypes.string,
        blurb: PropTypes.string,
        img: PropTypes.string,
        alt: PropTypes.string,
        className: PropTypes.string,
      }
export default Card