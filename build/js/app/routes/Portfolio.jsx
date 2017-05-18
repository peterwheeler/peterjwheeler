import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image, Thumbnail} from "react-bootstrap";
import { PortfolioList, FilterBar } from "../components/PortfolioCreator.jsx";

export default class Portfolio extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      checkedContentEditing: true,
	      checkedWebDevelopment: true,
	      checkedProjects: true
	    };

		this.checkOnContentEditing = this.checkOnContentEditing.bind(this);
		this.checkOnWebDevelopment = this.checkOnWebDevelopment.bind(this);
		this.checkOnProjects = this.checkOnProjects.bind(this);
  	}


	checkOnContentEditing(showContentEditing) {
	    this.setState({
	      checkedContentEditing: showContentEditing
	    })
	}

	checkOnWebDevelopment(showWebDevelopment){
	    this.setState({
	      checkedWebDevelopment: showWebDevelopment
	    })
	}

	checkOnProjects(showProjects) {
	    this.setState({
	      checkedProjects: showProjects
	    })
	}

  	render() {
  		const projects = [
	  		{	
	  			id: 3,
	  			category: "Project",
	  			path: "/portfolio/juxtapose",
	  			image: "/images/juxtapose/image-1.png",
	  			caption: "Multiselect Juxtapose",
	  			description: "Interactive image comparison toolkit."
	  		},
	  		{
	  			id: 2,
	  			category: "Web Development",
	  			path: "/portfolio/portus",
	  			image: "/images/portus/image-1.png",
	  			caption: "Portus",
	  			description: "Interactive maps and tour of the archaeological site of Portus."
	  		},
	  		{	
	  			id: 2,
	  			category: "Web Development",
	  			path: "/portfolio/lifelong",
	  			image: "/images/lifelong/image-1.png",
	  			caption: "Lifelong Learning",
	  			description: "Website redesign for the Lifelong Learning centre at the University of Southampton."
	  		},
	  		{
	  			id: 2,
	  			category: "Web Development",
	  			path: "/portfolio/ws-institute",
	  			image: "/images/wsi/image-1.png",
	  			caption: "Web Science Institute",
	  			description: "Creation of a new website for the WSI at the University of Southampton."
	  		},
	  		{
	  			id: 1,
	  			category: "Content Editing",
	  			path: "/portfolio/archaeology-wordpress",
	  			image: "/images/archaeology/image-1.png",
	  			caption: "Archaeology department blog",
	  			description: "WordPress blog following the research of the archaeological department at the University of Southampton."
	  		},
	  		{
	  			id: 1,
	  			category: "Content Editing",
	  			path: "/portfolio/acrg-wordpress",
	  			image: "/images/acrg/image-1.png",
	  			caption: "ACRG blog",
	  			description: "WordPress blog belonging to the Archaeological Computing Research Group."
	  		}
  		]

	    return (
			<div className="projects-container">
	    		<FilterBar
	    			checkedContentEditing={this.state.checkedContentEditing}
	    			checkedWebDevelopment={this.state.checkedWebDevelopment}
	    			checkedProjects={this.state.checkedProjects}
	    			includeContentEditing={this.checkOnContentEditing}
	    			includeWebDevelopment={this.checkOnWebDevelopment}
	    			includeProjects={this.checkOnProjects}
	    		/>
	    		<PortfolioList
	    			projects={projects}
	    			checkedContentEditing={this.state.checkedContentEditing}
	    			checkedWebDevelopment={this.state.checkedWebDevelopment}
	    			checkedProjects={this.state.checkedProjects}
	    		/>
			</div>
	    );
	}
}

if (module.hot) {
  module.hot.accept();
}