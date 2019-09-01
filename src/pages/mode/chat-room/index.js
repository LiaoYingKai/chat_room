import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {};

function ChatRoom() {
	return (
		<div className="chat-room">
			<div className="chat-room__tag"></div>
			<div className="chat-room__display"></div>
			<div className="chat-room__setting"></div>
			<div className="chat-room__user-input"></div>
		</div>
	);
}

ChatRoom.propTypes = propTypes;

export default ChatRoom;