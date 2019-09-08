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
}

ChatRoom.propTypes = propTypes;

function mapStateToProps (state) {
	return {
	};
}

function mapDispatchToProps (dispatch) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);

