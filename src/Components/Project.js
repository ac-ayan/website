import React from "react";
import ProjectCard from "../template/ProjectCard";
import "../css/project.css";
import projectdata from "../db/projectdata";
function Project(){
    return (
        <div className="project-section" name="projects">
            <h1>Projects</h1>
            <div className="project-list">
            {projectdata.map(item =>{
                return <ProjectCard image={item.image} alttext={item.alttext} title={item.title} content={item.content} color={item.color} />
            })}
            </div>

        </div>
    );
}
export default Project;