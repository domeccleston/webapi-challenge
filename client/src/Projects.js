import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Projects = ({ projects }) => {
  return (
    <Layout>
      <Header className="header"><h1>Projects</h1></Header>
      <div className="cards">
      {projects.map(project => (
        <Card
          className="card"
          bordered={false}
          title={project.name}
          extra={<Link to={`/${project.id}`}>More</Link>}
        >
          <p>{project.description}</p>
        </Card>
      ))}
      </div>
    </Layout>
  );
};

export default Projects;
