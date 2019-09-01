import React, { Component, } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadComponent from '../../layout/lib/loadable';
import LeftSidebar from '../../components/left-sidebar';
import cx from 'classnames';
import './style.scss';

const Lobby = loadComponent({ loader: () => import('./lobby') });
const GroupChart = loadComponent({ loader: () => import('./group-chat') });
const OneToOneChat = loadComponent({ loader: () => import('./one-to-one-chat') });

class ModePage extends Component {
	constructor() {
		super();
		this.state = {
			isClose: false,
		};
		this._handleToggleLeftBar = this._handleToggleLeftBar.bind(this);
	}
	_handleToggleLeftBar() {
		this.setState({
			isClose: !this.state.isClose,
		});
	}
	render() {
		const { _handleToggleLeftBar } = this;
		const { isClose } = this.state;

		return (
			<div className={cx({ 'mode-page--close-side-bar': isClose }, 'mode-page')}>
				<div className="mode-page__sidebar">
					<LeftSidebar onClick={_handleToggleLeftBar} isClose={isClose}/>
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
}

export default ModePage;
