import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Projects from './Projects';
import './App.css';

const { Header, Footer, Content } = Layout;

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
      <Route exact path="/projects" render={() => <Projects projects={projects}/>}/>
    </div>
  );
}

export default App;
