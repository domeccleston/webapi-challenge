import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectPage = props => {
  const [project, setProject] = useState({});
  const [projectActions, setProjectActions] = useState([]);
  const { id } = props.match.params;
  const fetchProjectActions = () =>
    axios
      .get(`http://localhost:4000/api/projects/${id}/actions`)
      .then(res => {
        setProjectActions(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  useEffect(() => {
    setProject(props.projects.find(el => el.id == id));
    fetchProjectActions();
  }, [props]);
  console.log(projectActions);
  return (
    <>
      {project && (
        <>
          <h1>Project: {project.name}</h1>
          <h2>Description: {project.description}</h2>
          <h2>Actions:</h2>
          {projectActions.length === 0 ? (
            <h3>None</h3>
          ) : (
            projectActions.map(action => <h3>{action.description}</h3>)
          )}
        </>
      )}
    </>
  );
};

export default ProjectPage;
