import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';

import LayoutComponent from './modules/LayoutComponent.jsx';

export default class App extends React.Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (
			<HashRouter>
				<div>
					<Switch>
						<Route path="/" component={LayoutComponent}></Route>
					</Switch>
				</div>
			</HashRouter>
		)
	}
}

if (module.hot) {
  module.hot.accept();
}