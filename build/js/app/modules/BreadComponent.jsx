import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import { LinkContainer } from 'react-router-bootstrap';
import ReactDOM from 'react-dom';
  
export default class BreadComponent extends React.Component {
  render() {
  	const routes = this.props.routes;
  	const params = this.props.params;
  	// console.log(React.cloneElement(this.props.children));
    return (
    	<div>
    		<Breadcrumbs
          routes={this.props.routes}
          params={this.props.params}
        />
      	</div>
    	);
  }
}
// ReactDOM.render(breadcrumbInstance, document.getElementById('app'));