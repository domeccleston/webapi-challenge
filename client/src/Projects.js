import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
  return (
    <>
      <h1>React App</h1>
      {projects.map(project => (
        <>
          <Link to={`/projects/${project.id}`}>
            <h1>{project.name}</h1>
          </Link>
        </>
      ))}
    </>
  );
};

export default Projects;
