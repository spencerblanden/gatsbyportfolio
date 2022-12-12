import * as React from "react"
// import {  useState} from "react"
import "./component.css"

const Intro = () => {
    // const facts = [
    //     "I was flown to LA to DJ an event", 
    //     "I donated bone marrow and the recipient came to my wedding.", 
    //     "I was student body president in college... because no one ran against me.", 
    //     "I am the youngest of 7 kids",
    //     "I have 6 years of leadership experience in the non-profit sector",
    //     "I have two dogs: Watson and Leo",
    //     "I have two kids: Wells and Birdie"
    // ]
    // const [currFact, setCurrFact] = useState('')
    // React.useEffect(() => {
    //     let count = Math.floor(Math.random() * 7)
    //     console.log(count)
    //     setCurrFact(facts[count])
    // },[facts])
 

    return (
        <div className="intro">
        <div className="greeting">Hi, my name is Spencer.</div>
        <div className="greeting">Here is a little bit of my story.</div>
        {/* <div className="mefact">{currFact}</div> */}
        </div>
    )
    }
export default Intro

