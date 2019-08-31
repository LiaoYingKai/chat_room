import React from 'react';
import { Route } from 'react-router-dom';
import loadComponent from '../lib/loadable';

const Home = loadComponent({ loader: () => import('../../pages/Home') });
const InputNicknamePage = loadComponent({ loader: () => import('../../pages/input-nickname') });
const SelectModePage = loadComponent({ loader: () => import('../../pages/select-mode') });

function RouteLayout() {
	return (
		<React.Fragment>
			<Route exact path="/" component={Home}></Route>
			<Route path="/input-nickname" component={InputNicknamePage}></Route>
			<Route path="/select-mode" component={SelectModePage}></Route>
		</React.Fragment>
	);
}


export default RouteLayout;