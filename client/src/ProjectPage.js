import React, { useState, useEffect } from 'react';
import { Card, Layout, Menu } from 'antd';
import axios from 'axios';
const { Header, Footer, Content } = Layout;

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
    <Layout>
      <Header className="header">
        <h1>Projects</h1>
        <Menu>
            <Menu.Item>Home</Menu.Item>
        </Menu>
      </Header>
      <div className="large-card-container">
        {project && (
          <Card className="large-card" bordered={false} title={project.name}>
            <h2>{project.description}</h2>
            <h2>Actions:</h2>
            {projectActions.length === 0 ? (
              <h3>None</h3>
            ) : (
              projectActions.map(action => <><h3>{action.description}</h3> - </>)
            )}
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default ProjectPage;
