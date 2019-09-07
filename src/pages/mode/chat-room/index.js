import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { connectionSocket } from '../../../actions/socket-actions';
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
		this.props.connection();
		// const socket = io('http://localhost:8888');

		// socket.on('connect', function() {
		// 	console.log("successful");
		// });
		// socket.on('test', message => {
		// 	console.log(message)
		// })
		// socket.emit('getMessage', '只回傳給發送訊息的 client');
		// socket.on('getMessage', message => {
		// 	console.log(message);
		// });
	}
}

ChatRoom.propTypes = propTypes;

function mapStateToProps (state) {
	return {
		status: state.status,
	};
}

function mapDispatchToProps (dispatch) {
	return {
		connection: () => dispatch(connectionSocket())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);

