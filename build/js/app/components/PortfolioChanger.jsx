import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image, Thumbnail} from "react-bootstrap";

export default class PortfolioChanger extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	previousDisplay: {
  					pointerEvents: "none",
  					color: "#d6d6d6",
  					cursor: "default"
  				},
	    	nextDisplay: {
  					pointerEvents: "none",
  					color: "#d6d6d6",
  					cursor: "default"
  				}
	    }
  	}

  	componentDidMount(){
  		if(this.props.previousPage !== "") {
  			this.setState({
  				previousDisplay: {
  					pointerEvents: "auto",
  					color: "#252525",
  					cursor: "pointer"
  				}
  			})
  		}
  		if(this.props.nextPage !== "") {
  			this.setState({
  				nextDisplay: {
  					pointerEvents: "auto",
  					color: "#252525",
  					cursor: "pointer"
  				}
  			})
  		}
  	}

	render(){
		return (
			<div className="update-container">
				<Grid fluid>
		    		<Row className="show-grid">
		    			<Col xs={12} sm={6} smOffset={6} md={2} mdOffset={8} lg={1} lgOffset={10}>
		    				<Link to={{pathname: "/portfolio/" + this.props.previousPage}} style={this.state.previousDisplay}><i className="fa fa-chevron-left page-arrow" aria-hidden="true" style={this.state.previousDisplay}></i></Link>
		    				<Link to={{pathname: "/portfolio/" + this.props.nextPage}} style={this.state.nextDisplay}><i className="fa fa-chevron-right page-arrow" aria-hidden="true" style={this.state.nextDisplay}></i></Link>
		    			</Col>
		    		</Row>
	    		</Grid>
			</div>
		)
	}
}

PortfolioChanger.defaultProps = {
	previousPage: "",
	nextPage: ""
}

PortfolioChanger.propTypes = {
	previousPage: PropTypes.string,
	nextPage: PropTypes.string
}