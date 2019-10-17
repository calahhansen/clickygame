import React from "react";
import "./style.css";
// import cards from 'cards.json';

function Card(props) {
    return (
        //   <div role="img" aria-label="click item" className="click-item shake"></div>
        <>
        <div className="card">
            <div className="img-container" role="img" style={{backgroundImage: `url("${props.img}")`}}>

                <img src={props.img} alt={props.id}/>
            </div>
            <span onClick={() => props.removeCard(props.isClicked)} className="remove">
                𝘅
       </span>
       
        </div>

        </>
    );
}

export default Card;
