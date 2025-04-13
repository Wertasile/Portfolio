import React from 'react'
import '../App.css';

const ProjectItem = ({ header, description, img, website, github }) => {
  return (
    <div className='project-item'>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
        <div><h2>{header}</h2></div>
        <div>{description}</div>
        
      </div>
      <div>
        {/* {img && <img src={img} alt={header} height={300}/>} */}
        <div style={{display:'flex', gap:'5px',justifyContent:'space-around'}}>
          <div className='button'><a href={website} target="_blank" title="Click to view the live project">VIEW</a></div>
          <div className='button'><a href={github} target="_blank" title="Check out the project's GitHub">GITHUB</a></div>
        </div>
      </div>
      
      
      
    </div>
  );
};

export default ProjectItem