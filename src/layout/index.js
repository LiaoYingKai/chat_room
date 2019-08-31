import React from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import RouteLayout from './route';
import './style.scss';

function Layout() {
	return (
		<Router>
			<RouteLayout/>
		</Router>
	);
}

export default Layout;