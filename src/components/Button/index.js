import React from "react"

function Button(props) {
    return(
        <div className="btn btn-secondary" onClick={() => props.function}>
            {props.text}
        </div>
    )
}

export default Button