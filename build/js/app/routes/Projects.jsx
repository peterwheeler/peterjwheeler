import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image} from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

export default class Projects extends React.Component {
  	render() {
  		const styleWidth = 270;
	    return (
	    	<div className="projects-container">
	    		<ul className="floats-gallery">
	    			<li className="slanted" style={{"width" : "16.65vw"}}>
		    			<div className="unslanted">
						  	<Link className="menu-item" to={{pathname: "/projects/portus", search: "id=0"}}>
						  		<Image src={'http://i.telegraph.co.uk/multimedia/archive/03519/potd-squirrel_3519920k.jpg'} style={{"height" : "auto", "width": "1366px"}}/>
						  	</Link>
						</div>	
					</li>
					<li className="slanted" style={{"width" : "33.3vw"}}>
						<div className="unslanted">
						  <Link className="menu-item" to={{pathname: "/projects/storytour", search: "id=1"}}>
						  	<Image src={'http://jootix.ir/wp-content/uploads/2015/10/jootix.ir--83098753.jpg'} style={{"height" : "auto", "width": "1366px"}}/>
						  </Link>						  
						</div>	
					</li>
					<li className="slanted" style={{"width" : "33.3vw"}}>
						<div className="unslanted">
						  <Link className="menu-item" to={{pathname: "/projects/photography", search: "id=2"}}>
						  	<Image src={'http://supplychainconference.co/wp-content/uploads/2014/03/320x200.png'} style={{"height" : "auto", "width": "1366px"}}/>
						  </Link>
						</div>	
					</li>
				</ul>
{/*				<ul className="gallery-links">
					<li>
						<LinkContainer to={{ pathname: '/projects/portus'}}>
						  	<Link className="menu-item">P.O.R.T.U.S</Link>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to={{ pathname: '/projects/portus-project-virtual-tour'}}>
						  <Link className="menu-item">Portus Tour</Link>
						</LinkContainer>
					</li>
					<li>
						<LinkContainer to={{ pathname: '/projects/photography'}}>
						  <Link className="menu-item">Photography</Link>
						</LinkContainer>
					</li>
				</ul>*/}
	    	</div>
	    );
	}
}