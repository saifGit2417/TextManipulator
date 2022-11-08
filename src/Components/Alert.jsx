import React from 'react'
import { Alert } from 'react-bootstrap'

function Alertcode({ alertmsg }) {
    return (
        <div style={{height:"70px"}}>
           { alertmsg && <div>
                <Alert key="success" variant="success">
                    <strong>{`${alertmsg.typeofmsg} : `}</strong>{alertmsg.msg}
                </Alert>
            </div>}
        </div>

    )
}

export default Alertcode;