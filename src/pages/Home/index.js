import React, { Component, } from 'react';
import { NavLink, } from 'react-router-dom';
import Container from '../../components/container';
import './style.scss';

class Home extends Component {
	render() {
		return (
			<Container className="home">
				<NavLink exact to="/select-mode"> [匿名聊天] </NavLink>
				<NavLink to="/input-nickname"> [暱稱聊天] </NavLink>
			</Container>
		);
	}
}

export default Home;
