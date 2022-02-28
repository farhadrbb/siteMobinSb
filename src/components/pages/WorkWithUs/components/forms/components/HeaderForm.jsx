import React from 'react'

export const HeaderForm = ({title}) => {

    return (
        <div className="mb-3">
            <div className="d-flex justify-content-center align-items-center">
                <span style={{whiteSpace:"nowrap",marginLeft:"10px",}}>{title}</span>
                <hr style={{width:"100%"}}/>
            </div>
        </div>


    )

}
