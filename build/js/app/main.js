import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import PreloadComponent from './modules/PreloadComponent';
import LayoutComponent from './modules/LayoutComponent';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Project from './routes/projects/Project';
import Coder from './routes/Coder';

const App = document.getElementById('app');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={LayoutComponent}>
			<Route path="home" component={Home}/>
			<Route path="about" component={About}/>
			<Route path="projects" component={Projects}/>
			<Route path="projects/:projectID" component={Project}/>
			<Route path="coder" component={Coder}/>
		</Route>
	</Router>	
, App);