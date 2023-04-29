import React, { useState } from "react";
import "../App.css";

const Event=()=>{
    let color = "#8e44ad";
    const [bg, setbg] = useState(color)
    const [name, setname] = useState("Click Me")
 
    const bgChange=()=>{
        let newbg = "#34495e";
        setbg(newbg);
        setname("Ooch : 🤯");
    }
     const bgDoubleClick =()=>{
        setbg(color);
        setname("Aiyyyo :😠")
     }

    return(
        <>
        <div className="eventDiv" style={{backgroundColor:bg}}>
        <button className="buttonEvent" 
        onDoubleClick={bgDoubleClick}
        onClick={bgChange}>{name}</button>

        </div>
        </>
    )
}

export default Event