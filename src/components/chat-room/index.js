import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
	title: PropTypes.string,
	chatInfo: PropTypes.array,
};

const defaultProps = {
	chatInfo: [],
};

class ChatRoom extends Component {
	constructor() {
		super();
		this._renderItem = this._renderItem.bind(this);
	}
	_renderItem() {
		const { chatInfo } = this.props;

		return (
			chatInfo.map((item, index) => {
				return (
					<div className="chat-room__item" key={`chat-room__${index}`}>
						<div> {item.serialNumber} {item.chatName}</div>
						<div> {item.people}/{item.peopleOfMax} </div>
					</div>
				);
			})
		);
	}
	render() {
		const { title } = this.props;
		const { _renderItem } = this;

		return (
		
			<div className="chat-room">
				<div className="chat-room__title">
					{title}
				</div>
				<div className="chat-room__content">
					{_renderItem()}
				</div>
			</div>
		);
	}

}

ChatRoom.propTypes = propTypes;
ChatRoom.defaultProps = defaultProps;

export default ChatRoom;