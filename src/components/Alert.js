import React from 'react'

function Alert(props) {
    const { alert } = props;
    return (
        <div style={{height: '80px'}}>
            {alert && <div className={`alert alert-${alert.type}`} role="alert" >
               {alert.msg}
            </div>}
            </div>

    )
}

export default Alert
