import './App.css';

import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import ProjectItem from './Components/projectItem';
import WorkItem from './Components/WorkItem';
import { InView } from 'react-intersection-observer';

import projectData from './data/Projectdata.json';
import techstackData from './data/TechStack.json';

import reactimg from './Images/logo512.png';
import nextimg from './Images/nextjs.png';
import blazorimg from './Images/blazor.png';
import nodeimg from './Images/nodejs.jpg';
import mongodbimg from './Images/mongoDB.png';
import awsimg from './Images/aws.png';
import mssqlimg from './Images/mssql-server.png';

import CV from './data/CV.pdf'

import easynote from './Images/projects/awsnotepp.png';
import hpc from './Images/projects/hpc.jpeg';
import discourse from './Images/projects/discourse.png';
import mernchatapp from './Images/projects/mernchatapp.png';
import promptopia from './Images/projects/promptopia_img.png';
import notetakingapp_img from './Images/projects/notetakingapp_img.jpeg';
import moviemania from './Images/projects/movie_img.png';

const imageMap = {
  reactimg,
  nextimg,
  blazorimg,
  nodeimg,
  mongodbimg,
  awsimg,
  mssqlimg
};

const projectImageMap = {
  easynote,
  discourse,
  moviemania,
  promptopia
}

function App() {
  const [loading, setLoading] = useState(true);
  const [flipped, setFlipped] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="App">
          <header className="socials">
            <div>
              <img src="/Images/AA_light.png" height="32" alt=""/>
            </div>
            <nav>
              <div className='button'>
                <a href="https://github.com" target="_blank" rel="noreferrer" title='Check out my GitHub!'>GITHUB</a>
              </div>
              <div className='button'>
                <a href="mailto:ahmedmharfan@gmail.com" title="Email Me here! --> ahmedmharfan@gmail.com">
                  <span>EMAIL</span>
                </a>
              </div>
              <div className='button'>
                <a
                  href="https://linkedin.com/in/ahmed-mohamed-haniffa-arfan-989267202"
                  target="_blank"
                  rel="noreferrer"
                  title="Want to connect via Linkedin?"
                >
                  <span style={{display:'inline-flex'}}>LINKEDIN</span>
                </a>
              </div>
            </nav>
            
          </header>

          <main className="parent-grid">
            {/* HERO BANNER - INTRODUCTION AND TECH STACK */}
            <section className="hero-grid">
              <InView threshold={0.2} triggerOnce>
                {({ inView, ref }) => (
                  <div className={`intro centre ${inView ? 'show' : 'hidden'}`} ref={ref}>
                    <div><h1>I'm Ahmed</h1></div>
                    <div><h3>Frontend Developer</h3></div>
                    <div><i className="fa-solid fa-location-dot" style={{ padding: 5 }}></i>{' '}London, United Kingdom</div>
                    <div className="button">
                      <a href={CV} title="Check My Qualifications out" download>DOWNLOAD CV</a>
                    </div>
                  </div>
                )}
              </InView>

              <InView threshold={0.2} triggerOnce>
                {({ inView, ref }) => (
                  <div className={`tech ${inView ? 'show' : 'hidden'}`} ref={ref}>
                      {techstackData.map((tech,index) => (
                        <div 
                          className={`tech-item ${inView ? 'show' : 'hidden'}`} 
                          style={{ transitionDelay: `${index * 0.2}s` }} 
                          key={index}
                        >
                          <img src={imageMap[tech.src]} height={40} alt={tech.name}/>
                          {tech.name}
                      </div>
                      ))}
                  </div>
                )}
              </InView>
            </section>

            {/* PROJECTS / EXPERIENCE SECTION */}
            <InView threshold={0.01} triggerOnce>
              {({ inView, ref }) => (
                <section className={`child ${inView ? 'show' : 'hidden'}`} ref={ref}>
                  <div
                    className={`${inView ? 'show' : 'hidden'}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div onClick={() => setFlipped(!flipped)}>
                      {flipped ? <h1>Projects</h1> : <h1>Experience</h1>}
                    </div>
                    <div className="switch">
                      {flipped ? (
                        <div style={{ left: 0 }} onClick={() => setFlipped(!flipped)}>
                          <i className="fa-solid fa-rocket"></i>
                        </div>
                      ) : (
                        <div style={{ right: 0 }} onClick={() => setFlipped(!flipped)}>
                          <i className="fa-solid fa-building-columns"></i>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="card">
                    <div className={flipped ? 'card-inner' : 'card-inner flipped'}>
                      <div className="card-front">
                        {projectData.map((project,index) => (
                          <ProjectItem
                            key={index}
                            className={`tech-item ${inView ? 'show' : 'hidden'}`}
                            header={project.header}
                            img={projectImageMap[project.img]}
                            description={project.description}
                            techstack={project.techstack}
                            website={project.website}
                            github={project.github}
                          />
                        ))}

                      </div>

                      <div className="card-back">
                        A dive into my Work and Education Qualifications
                        <WorkItem
                          title="IT Support Analyst"
                          time="August 2024 - March 2025"
                          company="University of Greenwich"
                          description="sad"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </InView>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
