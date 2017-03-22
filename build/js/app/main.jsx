import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import { startTransform } from 'C:/Users/pw8g08/hubiC/webroot/htdocs/literatim/build/js/threejs/svgCloud.jsx';

const AppElement = document.getElementById('app');

ReactDOM.render(
		<App />
	, AppElement, function(){
	startTransform();
});
if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        console.log(NextApp);
        ReactDOM.render(
        	<AppContainer>
        		<NextApp />
        	</AppContainer>, AppElement);
    });
}

