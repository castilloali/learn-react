import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
function Status() {
    const [text, setText] =useState("castillo + ")
    const handelInput=(e)=>{
        setText(text + e.target.value)
        console.log(text)
    }
    return (
        <div>
            <input onChange={handelInput} value={text} type="text" />
            <label >{text}</label>
        </div>
    )
}

export default Status
