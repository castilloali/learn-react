import React, {useState , useEffect} from 'react'
import { Button } from 'react-bootstrap'
function Status() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("ssss")
    },[count])
    return (
        <div>
            <Button onClick={()=>{setCount(count + 1)}}> +</Button>
            <label >{count}</label>
        </div>
    )
}

export default Status
