import React, { Component, } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {};

class ChatRoom extends Component {
	render() {
		return (
			<div className="chat-room">
				<div className="chat-room__tag"></div>
				<div className="chat-room__display"></div>
				<div className="chat-room__setting"></div>
				<div className="chat-room__user-input"></div>
			</div>
		);
	}
	componentDidMount() {
		const socket = io('http://localhost:8888');

		socket.on('connect', function() {
			console.log("successful");
		});
		socket.on('test', message => {
			console.log(message)
		})
		socket.emit('getMessage', '只回傳給發送訊息的 client');
		socket.on('getMessage', message => {
			console.log(message);
		});
	}
}

ChatRoom.propTypes = propTypes;

export default ChatRoom;