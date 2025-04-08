import React from 'react'
import '../App.css';

const ProjectItem = ({ header, description, img, website, github }) => {
  return (
    <div className='project-item'>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
        <div><h2>{header}</h2></div>
        <div><p>{description}</p></div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <div className='button'><a href={website} target="_blank">View</a></div>
          <div className='button'><a href={github} target="_blank">GitHub</a></div>
        </div>
      </div>
      <div>
        {img && <img src={img} alt={header} height={300}/>}
      </div>
      
      
      
    </div>
  );
};

export default ProjectItem