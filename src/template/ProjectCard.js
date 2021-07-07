import React from "react";
import "../css/project.css";
function ProjectCard(props){
    return (
        <div class="card" style={{"width": "28rem","backgroundColor":props.color}} >
  <img src={props.image} class="card-img-top" alt={props.alttext} />
  <div class="card-body main-card">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.content}</p>
  </div>
  <div class="card-body button-card">
    <a href="#" class="card-link"><button className="btn custom-button1" >GitHub</button></a>
    <a href="#" class="card-link"><button className="btn custom-button2">Website</button></a>
  </div>
</div>
    );
}
export default ProjectCard;