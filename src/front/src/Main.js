import React from "react"
import pills from "./pills.jpg"
import "./Main.css"

export default function Main(){
    return(
        <div className="main">
            <div className="text">
                <h1 style={{fontSize: "50px"}}>iAuthenticate</h1>
                <h1>Verify your Pharmaceutical Products</h1>
                <button><a href="#index.css">Verify</a></button>
                
            </div>
            <div className = "image">
            <img src = {pills} height = "400px" width="400px" style={{borderRadius:"50%"}}></img>
            </div>
        </div>
        
    )
}
