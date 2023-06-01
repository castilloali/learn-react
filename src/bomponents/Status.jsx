import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'

import axios from 'axios'



// const fechAxios = async () =>{
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//     setstat(res.data)
//     console.log(res.data)
// }

function Status() {

    const [stat , setstat] = useState([])
    useEffect(()=> {
    async function fetchData() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setstat(res.data)
        console.log(res.data)  
    }

    fetchData()
},[])


    return (

        <div>
            {stat.map((item)=>{
                return (<h3>{item.title}</h3>)
            })}
            <Button>+</Button>
        </div>
    )
}

export default Status
