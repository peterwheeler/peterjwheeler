import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class About extends React.Component {

  render() {
    return (
      <div className="about-container">
		    <Grid fluid>
		         <Row className="show-grid">
		         		<Col xs={4} xsOffset={4}>
		         			<h1>About</h1>
		         		</Col>
						<Col xs={8} xsOffset={2}>
							<p>Lorem ipsum Eu sit incididunt in minim aliquip irure quis laborum anim dolore et et in Ut ullamco ad aliquip minim exercitation cupidatat irure culpa nostrud elit officia Ut sint exercitation Duis do ex consectetur consectetur nulla ullamco aliqua cupidatat Excepteur id quis laboris sit labore est ad et consequat eu reprehenderit occaecat aliqua nisi minim nisi irure enim ea cillum eu id sed exercitation pariatur ea officia elit ut adipisicing cupidatat in ea exercitation in nisi esse sed est laboris Duis in elit commodo reprehenderit adipisicing in irure ut ut cillum magna ea Excepteur amet id Duis in non dolor commodo velit culpa mollit nisi ea ex dolor commodo sunt aliquip do est consectetur culpa nisi sint voluptate deserunt nostrud sunt et laborum fugiat ullamco id dolore aliqua ut qui pariatur est amet laboris dolore laborum Duis ex sed laborum qui ut consectetur nulla laboris dolore sit eiusmod consectetur veniam est dolor fugiat veniam culpa fugiat fugiat fugiat nulla labore Duis ea incididunt aute eiusmod enim velit sed reprehenderit Excepteur velit in consectetur in Duis non velit occaecat irure cillum cillum sunt enim dolore voluptate dolore id Ut eu ex enim enim aliqua nulla sed magna laboris elit esse dolore in nostrud quis non consequat proident Ut dolor in ea in deserunt minim non incididunt eiusmod veniam laboris sit laborum elit dolore enim anim laborum est commodo veniam qui anim fugiat quis in amet in veniam veniam est fugiat sed consequat laboris dolore Duis in laborum ea dolor sit elit commodo cillum nisi dolor adipisicing consequat non Duis anim consectetur exercitation aute officia sint eu in dolore.
							</p>
						</Col>
		         </Row>
	    	</Grid>
   		</div>
    );
  }
}