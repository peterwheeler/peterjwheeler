import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LayoutComponent from './modules/LayoutComponent.jsx';

import { startTransform } from 'C:/Users/pw8g08/hubiC/webroot/htdocs/literatim/build/js/threejs/svgCloud.jsx';

const App = document.getElementById('app');

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={LayoutComponent}></Route>
			</Switch>
		</div>
	</BrowserRouter>
	, App, function(){
	startTransform();
});