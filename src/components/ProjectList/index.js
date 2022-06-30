import React from "react";
import PropTypes from 'prop-types'

export default function ProjectList(props) {
  const {projects} = props.projects;
  //console.log(projects)

  return (
    <div className="projectList">
     {projects.map((project, i) => 
        <img className='images' key={i} src={project.img} category={project.category} alt={project}/>
       //<div>{project}</div>
     )
     } 
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array
};
//<div className='list'>{projects.map((el, i) => <img className='images' src={el} key={i} alt={el}/>)}</div>