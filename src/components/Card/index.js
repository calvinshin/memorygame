import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";

function Card (object) {
    return(
        <div className="card cardStyle m-2">
            <img src={object.image} className="card-img-top imageStyle" alt="">
            </img>
            <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p>Test Information + the phrase "{object.test}"</p>
            </div>
        </div>
    )
}

export default Card;