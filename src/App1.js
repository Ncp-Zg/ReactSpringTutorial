import "./styles.css"
import React, { useState } from 'react'
import {animated,useSpring} from "react-spring"

const App1 = () => {

    const [numb,setNumb] =useState(999)

    //use spring hook is used to animate the value

   
    
    //will naimate from 0 to 999 
    const props = useSpring({val:numb , from: {val:0}})

    //generate random number
    
    const randomNumber = Math.floor(Math.random()*999)
    //get rid of decimals
    return (
        <div className="App">
            <div className="card">
                <animated.h1>{props.val.to(val=>Math.floor(val))}</animated.h1>

                <button className="btn" onClick={()=>setNumb(randomNumber)}>Generate Number</button>
            </div>
        </div>
    )
}

export default App1
