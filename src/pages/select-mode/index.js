import React from 'react';
import { NavLink, } from 'react-router-dom';
import Container from '../../components/container';
import './style.scss';

function SelectMode() {
	return (
		<Container className="select-mode">
			<NavLink exact to="/mode/chat-room"> [隨機配對1對1聊天] </NavLink>
			<NavLink to="/mode/lobby"> [進入聊天大廳] </NavLink>
		</Container>
	);
}

export default SelectMode;
