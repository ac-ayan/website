import React from "react";
import "../css/skill.css";
function Card(props){
    return (
        <div class="card" style={{"width":"8rem"}} >
            {props.icon}
            <div class="card-body">
            <p class="card-text">{props.title}</p>
            </div>
        </div>
    );
}
export default Card;