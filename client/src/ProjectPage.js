import React from 'react';

const ProjectPage = (props) => {
    console.log(props.match.params.id);
    return (
        <>
        <h1>Project ID: {props.match.params.id}</h1>
        </>
    );
}
 
export default ProjectPage;