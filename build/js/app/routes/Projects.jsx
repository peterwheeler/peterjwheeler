import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image} from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

export default class Projects extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {hoverLink: ""};

		this.handleHover = this.handleHover.bind(this);
	}

	handleHover(evt) {
		// evt.persist()
	    // this.setState(prevState => ({
	    //   hoverLink: evt.target.alt
	    // }));
		var url = evt.currentTarget.href;
		var href = url.split("/projects")[1];
	    var evtValues = {"href": "/projects" + href, "name": evt.target.alt};
	    this.props.updateProject(evtValues)
	}

  	render() {
  		const styleWidth = 270;
	    return (
	    	<div className="projects-container">
	    		<ul className="floats-gallery">
	    			<li className="slanted" style={{"width" : "16.66vw"}}>
		    			<div className="unslanted">
						  	<Link className="menu-item" to={{pathname: "/projects/portus", search: "id=0"}} onMouseOver={this.handleHover}>
						  		<Image src={'http://i.telegraph.co.uk/multimedia/archive/03519/potd-squirrel_3519920k.jpg'} alt="Portus" style={{"height" : "auto", "width": "1366px"}}/>
						  	</Link>
						</div>	
					</li>
					<li className="slanted" style={{"width" : "33.3vw"}}>
						<div className="unslanted">
						  <Link className="menu-item" to={{pathname: "/projects/storytour", search: "id=1"}} onMouseOver={this.handleHover}>
						  	<Image src={'http://jootix.ir/wp-content/uploads/2015/10/jootix.ir--83098753.jpg'} alt="P.O.R.T.U.S" style={{"height" : "auto", "width": "1366px"}}/>
						  </Link>						  
						</div>	
					</li>
					<li className="slanted" style={{"width" : "33.3vw"}}>
						<div className="unslanted">
						  <Link className="menu-item" to={{pathname: "/projects/photography", search: "id=2"}} onMouseOver={this.handleHover}>
						  	<Image src={'http://supplychainconference.co/wp-content/uploads/2014/03/320x200.png'} alt="Photography" style={{"height" : "auto", "width": "1366px"}}/>
						  </Link>
						</div>	
					</li>
				</ul>
	    	</div>
	    );
	}
}