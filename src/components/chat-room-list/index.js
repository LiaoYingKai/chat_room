import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
	title: PropTypes.string,
	chatRoomList: PropTypes.array,
};

const defaultProps = {
	chatRoomList: [],
};

class ChatRoom extends Component {
	constructor() {
		super();
		this._renderItem = this._renderItem.bind(this);
	}
	_renderItem() {
		const { chatRoomList } = this.props;

		return (
			chatRoomList.map((item, index) => {
				return (
					<div className="chat-room-list__item" key={`chat-room-list__${index}`}>
						<div> {item.id} {item.chatRoomName}</div>
						<div> {item.numOfPeople}/{item.numOfMaxPeople} </div>
					</div>
				);
			})
		);
	}
	render() {
		const { title } = this.props;
		const { _renderItem } = this;

		return (
			<div className="chat-room-list">
				<div className="chat-room-list__title">
					{title}
				</div>
				<div className="chat-room-list__content">
					{_renderItem()}
				</div>
			</div>
		);
	}

}

ChatRoom.propTypes = propTypes;
ChatRoom.defaultProps = defaultProps;

export default ChatRoom;