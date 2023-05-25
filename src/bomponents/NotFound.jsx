import React from 'react'
import Alert from 'react-bootstrap/Alert'

const NotFound = (props) => {
    return (
        <div>
            <Alert  variant={props.color}>
                {props.message}
                <button className='btn btn-danger ms-3' >okay</button>
            </Alert>
        </div>
    )
}

export default NotFound