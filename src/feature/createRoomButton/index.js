import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import NewRoomModal from '../../components/new-room-modal';
import './style.scss';

const propTypes = {};

class createRoomButton extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
		};
		this._handleClickNewRoomModal = this._handleClickNewRoomModal.bind(this);
	}
	_handleClickNewRoomModal() {
		this.setState({
			visible: !this.state.visible,
		});
	}
	render() {
		const { visible } = this.state;
		const { _handleClickNewRoomModal } = this;

		return (
			<React.Fragment>
				<Button 
					className="createRoomButton"
					onClick={_handleClickNewRoomModal}
				>新增聊天室</Button>
				<NewRoomModal
					visible={visible}
					onToggleModal={_handleClickNewRoomModal}
				/>
			</React.Fragment>
		);
	}

}

createRoomButton.propTypes = propTypes;

export default createRoomButton;