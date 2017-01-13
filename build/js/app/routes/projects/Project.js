import React from 'react';
import { Link } from "react-router";

export default class Project extends React.Component {
  render() {
    return (
      <div className="project-container">
      	<h1>{this.props.params.projectID}</h1>
      </div>
    );
  }
}