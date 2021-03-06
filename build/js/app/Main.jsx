import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const AppElement = document.getElementById('app');

ReactDOM.render(
		<App />
	, AppElement);

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        ReactDOM.render(
        	<AppContainer>
        		<NextApp />
        	</AppContainer>
            ,AppElement);
    });
}

