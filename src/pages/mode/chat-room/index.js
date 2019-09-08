import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { connectionSocket, createChatRoom } from '../../../actions/socket-actions';
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
		// this.props.createChatRoom();
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
		connection: () => dispatch(connectionSocket()),
		createChatRoom: () => dispatch(createChatRoom())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);

