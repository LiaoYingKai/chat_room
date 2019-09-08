import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadComponent from '../lib/loadable';

const Home = loadComponent({ loader: () => import('../../pages/home') });
const InputNicknamePage = loadComponent({ loader: () => import('../../pages/input-nickname') });
const SelectModePage = loadComponent({ loader: () => import('../../pages/select-mode') });
const Mode = loadComponent({ loader: () => import('../../pages/mode') });

function RouteLayout() {
	return (
		<Switch>
			<Route exact path="/" component={Home}></Route>
			<Route path="/input-nickname" component={InputNicknamePage}></Route>
			<Route path="/select-mode" component={SelectModePage}></Route>
			<Route path="/mode" component={Mode}></Route>
		</Switch>
	);
}


export default RouteLayout;