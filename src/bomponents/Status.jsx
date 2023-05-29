import React, { useRef} from 'react'
import { Button } from 'react-bootstrap'
function Status() {
    const inp = useRef(null)
    const Foucsr=()=>{
        inp.current.focus()
    }
    return (
        <div>
            <input type="text" ref={inp} />
            <Button onClick={Foucsr}> +</Button>
        </div>
    )
}

export default Status
