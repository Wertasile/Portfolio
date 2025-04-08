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
          <div className="socials">
            <div>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div>
              <a href="mailto:arfanahmedpsn@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/ahmed-mohamed-haniffa-arfan-989267202"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="parent-grid">
            {/* HERO BANNER - INTRODUCTION AND TECH STACK */}
            <section className="hero-grid">
              <InView threshold={0.2} triggerOnce>
                {({ inView, ref }) => (
                  <div className={`intro centre ${inView ? 'show' : 'hidden'}`} ref={ref}>
                    <div><h1>I'm Ahmed</h1></div>
                    <div><h3>Software Engineer / Developer</h3></div>
                    <div><i className="fa-solid fa-location-dot" style={{ padding: 5 }}></i>{' '}London, United Kingdom</div>
                    <div className="button">
                      <a href="/cv.pdf" download>
                        <i className="fa-solid fa-cloud-arrow-down"></i> Download CV
                      </a>
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
                          style={{ transitionDelay: `${index * 0.1}s` }} 
                          key={index}
                        >
                          <img src={imageMap[tech.src]} height={40}/>
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
          </div>
        </div>
      )}
    </>
  );
}

export default App;
