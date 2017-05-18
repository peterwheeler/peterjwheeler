import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image, Thumbnail} from "react-bootstrap";

class PortfolioItem extends React.Component {
  render() {
    // var name = this.props.product.stocked ? this.props.product.name :  <span style={{color: 'red'}}>
    //     {this.props.product.name}
    //   </span>;
    return (
      	<Col xs={12} sm={6} md={6} lg={4}>
	    	<Link className="menu-item" to={{pathname: this.props.project.path}}>
		    	<div className="image-item">
              <div className="corner-ribbon">{this.props.project.category}</div>
		    	    <Image src={this.props.project.image} alt={this.props.project.caption} responsive/>
		    	    <h3 className="image-caption">{this.props.project.caption}</h3>
		    	    <p>{this.props.project.description}</p>
				</div>
			</Link>
		</Col>
    );
  }
}

export class PortfolioList extends React.Component {
  render() {
    var items = [];
    var lastCategory = null;
    this.props.projects.forEach((project) => {
    	if((project.id === 1 && this.props.checkedContentEditing === false)) {
    		return;
    	}
    	if((project.id === 2 && this.props.checkedWebDevelopment === false)) {
    		return;
    	}
    	if((project.id === 3 && this.props.checkedProjects === false)) {
    		return;
    	}
      	items.push(<PortfolioItem project={project} key={project.caption} />);
      lastCategory = project.category;
    });
    return (
      	<div className="projects-container">
			<Grid fluid>
				<Row className="show-grid">
				{items}
				</Row>
			</Grid>
		</div>
    );
  }
}

export class FilterBar extends React.Component {
	constructor(props) {
	super(props);
	
	this.handleContentEditing = this.handleContentEditing.bind(this);
	this.handleWebDevelopment = this.handleWebDevelopment.bind(this);
	this.handleProjects = this.handleProjects.bind(this);
	}

	handleContentEditing(e) {
		event.preventDefault();
  		event.stopPropagation();
  		console.log("1");
		this.props.includeContentEditing(e.target.checked);
		return false;
	}

	handleWebDevelopment(e) {
		event.preventDefault();
  		event.stopPropagation();
  		console.log("2");
		this.props.includeWebDevelopment(e.target.checked);
		return false;
	}

	handleProjects(e) {
		event.preventDefault();
  		event.stopPropagation();
  		console.log("3");
		this.props.includeProjects(e.target.checked);
		return false;
	}
  
  render() {
    return (
   	<div className="update-container">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={12} sm={6} smOffset={6} md={4} mdOffset={7} lg={4} lgOffset={7}>
          <form className="filter-form">
            <label className="checkbox-label" htmlFor="cb1">
            <input className="checkbox-input"
            	id="cb1"
                type="checkbox"
                checked={this.props.checkedContentEditing}
                onChange={this.handleContentEditing}
              />
              Content Editing
            </label>
            <label className="checkbox-label" htmlFor="cb2">
            <input className="checkbox-input"
            	id="cb2"
                type="checkbox"
                checked={this.props.checkedWebDevelopment}
                onChange={this.handleWebDevelopment}
              />
              Web Development
            </label>
            <label className="checkbox-label" htmlFor="cb3">
            <input className="checkbox-input"
            	id="cb3"
                type="checkbox"
                checked={this.props.checkedProjects}
                onChange={this.handleProjects}
              />
              Projects
            </label>
          </form>
        </Col>
      </Row>
    </Grid>
	</div>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}