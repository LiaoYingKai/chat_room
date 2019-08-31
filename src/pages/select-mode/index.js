import React from 'react';
import { NavLink, } from 'react-router-dom';
import Container from '../../components/container';
import './style.scss';

function Home() {
	return (
		<Container className="select-mode">
			<NavLink exact to="/"> [隨機配對1對1聊天] </NavLink>
			<NavLink to="/"> [進入聊天大廳] </NavLink>
		</Container>
	);
}

export default Home;