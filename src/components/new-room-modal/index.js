/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
	visible: PropTypes.bool,
	onToggleModal: PropTypes.func,
	onSubmit: PropTypes.func,
};

const defaultProps = {
	onToggleModal: () => {},
	onSubmit: () => {},
};

class NewRoomModal extends Component {
	constructor() {
		super();
		this.state = {
			chatRoomName: '',
			numOfPeople: '2',
			isSettingPassword: false,
			password: '',
			roomStatus: 'public',
		};
		this._handleChangeChatRoomName = this._handleChangeChatRoomName.bind(this);
		this._handleChangeNumOfPeople = this._handleChangeNumOfPeople.bind(this);
		this._handleChangeCheck = this._handleChangeCheck.bind(this);
		this._handleChangePassword = this._handleChangePassword.bind(this);
		this._handleChangeRoomStatus = this._handleChangeRoomStatus.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
		this._handleCancel = this._handleCancel.bind(this);
		this._handleInitState = this._handleInitState.bind(this);
	}

	_handleChangeChatRoomName(event) {
		this.setState({
			chatRoomName: event.target.value,
		});
	}

	_handleChangeNumOfPeople(event) {
		this.setState({
			numOfPeople: event.target.value,
		});
	}

	_handleChangeCheck() {
		this.setState({
			isSettingPassword: !this.state.isSettingPassword
		});
	}

	_handleChangePassword(event) {
		this.setState({
			password: event.target.value
		});
	}

	_handleChangeRoomStatus(event) {
		this.setState({
			roomStatus: event.target.value,
		});
	}

	_handleSubmit() {
		const { onToggleModal, onSubmit } = this.props;

		onSubmit(this.state);
		this._handleInitState();
		onToggleModal();
	}

	_handleCancel() {
		const { onToggleModal } = this.props;
		
		this._handleInitState();		
		onToggleModal();
	}

	_handleInitState() {
		this.setState({
			chatRoomName: '',
			numOfPeople: '2',
			roomStatus: 'public',
			isSettingPassword: false,
			password: '',
		});
	}

	render() {
		const { visible } = this.props;
		const { 
			chatRoomName,
			numOfPeople,
			isSettingPassword,
			password,
			roomStatus,
		} = this.state;
		const { 
			_handleChangeChatRoomName,
			_handleChangeNumOfPeople,
			_handleChangeCheck,
			_handleChangePassword,
			_handleChangeRoomStatus,
			_handleSubmit,
			_handleCancel,
		} = this;

		return (
			<div className="new-room-modal" style={ visible ? { display: 'block', } : { display: 'none' } }>
				<p className="new-room-modal__title">新增聊天室</p>
				<input 
					placeholder="聊天室名稱" 
					type="text"
					value={chatRoomName}
					onChange={_handleChangeChatRoomName}
				/>
				<div className="new-room-modal__people-of-room">
					限制
					<div className="new-room-modal__select">
						<select
							value={numOfPeople}
							onChange={_handleChangeNumOfPeople}
						>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>
					</div>
					人
					<span>(上限30人)</span>
				</div>
				<div className="new-room-modal__set-password">
					<input 
						type="checkbox"
						checked={isSettingPassword}
						onChange={_handleChangeCheck}
					/>
					設密碼
					{
						isSettingPassword ?
							<input 
								placeholder="XXXX"
								type="text"
								value={password}
								onChange={_handleChangePassword}
							/>	: null
					}
				</div>
				<div className="new-room-modal__select">
					<select
						value={roomStatus}
						onChange={_handleChangeRoomStatus}
					>
						<option value="public">公開</option>
						<option value="private">私密</option>
					</select>
				</div>
				<div className="new-room-modal__comment">
					<p >//公開:顯示在聊天室大廳任何人都能加入</p>
					<p >//私密:只能用搜尋聊天室才能找到</p>
				</div>
				<div className="new-room-modal__button-group">
					<span 
						className="new-room-modal__button"
						onClick={_handleSubmit}
					>[確定]</span>
					<span 
						className="new-room-modal__button"
						onClick={_handleCancel}
					>[取消]</span>
				</div>
			</div>
		);
	}
}

NewRoomModal.propTypes = propTypes;
NewRoomModal.defaultProps = defaultProps;

export default NewRoomModal;
