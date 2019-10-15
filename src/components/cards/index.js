import React from "react";
import "./style.css";

function Card(props) {
    return (
        //   <div role="img" aria-label="click item" className="click-item shake"></div>
        <div className="card">
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>
            <span onClick={() => props.removeCard(props.id)} className="remove">
                𝘅
       </span>
        </div>
    );
}

export default Card;
