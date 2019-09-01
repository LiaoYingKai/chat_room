import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadComponent from '../../layout/lib/loadable';
import LeftSidebar from '../../components/left-sidebar';
import './style.scss';

const Lobby = loadComponent({ loader: () => import('./lobby') });
const GroupChart = loadComponent({ loader: () => import('./group-chat') });
const OneToOneChat = loadComponent({ loader: () => import('./one-to-one-chat') });

function ModePage() {
	return (
		<div className="mode-page">
			<div className="mode-page__sidebar">
				<LeftSidebar/>
			</div>
			<div className="mode-page__content">
				<Switch>
					<Route exact path="/mode/lobby" component={Lobby}></Route>
					<Route exact path="/mode/gorup-chat" component={GroupChart}></Route>
					<Route exact path="/mode/one-to-one-chat" component={OneToOneChat}></Route>
				</Switch>
			</div>
		</div>
	);
}

export default ModePage;
