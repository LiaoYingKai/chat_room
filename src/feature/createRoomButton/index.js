import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import NewRoomModal from '../../components/new-room-modal';
import { connect } from 'react-redux';
import { createChatRoom } from '../../actions/socket-actions';
import './style.scss';

const propTypes = {
	className: PropTypes.string,
	createChatRoom: PropTypes.func,
};

class createRoomButton extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
		};
		this._handleClickNewRoomModal = this._handleClickNewRoomModal.bind(this);
		this._handleCreateRoom = this._handleCreateRoom.bind(this);
	}
	_handleClickNewRoomModal() {
		this.setState({
			visible: !this.state.visible,
		});
	}
	_handleCreateRoom(roomInfo) {
		const { createChatRoom } = this.props;

		createChatRoom(roomInfo);
	}
	render() {
		const { visible } = this.state;
		const { _handleClickNewRoomModal, _handleCreateRoom } = this;
		const { className } = this.props;

		return (
			<>
				<Button 
					className={className}
					onClick={_handleClickNewRoomModal}
				>新增聊天室</Button>
				<NewRoomModal
					visible={visible}
					onToggleModal={_handleClickNewRoomModal}
					onSubmit={_handleCreateRoom}
				/>
			</>
		);
	}
}

createRoomButton.propTypes = propTypes;

function mapStateToProps(state) {
	return {

	};
}

function mapDispatchToProps(dispatch) {
	return {
		createChatRoom: (roomInfo) => dispatch(createChatRoom(roomInfo))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(createRoomButton);
