import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Projects from './Projects';
import ProjectPage from './ProjectPage';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const getProjects = () => {
    axios.get('http://localhost:4000/api/projects').then(res => {
      setProjects(res.data);
    });
  };
  useEffect(() => {
    getProjects();
  }, []);
  console.log(projects);
  return (
    <div className="App">
      <Route exact path="/" render={() => <Projects projects={projects}/>}/>
      <Route path="/:id" render = {(props) => <ProjectPage {...props} projects={projects}/>}/>
    </div>
  );
}

export default App;
