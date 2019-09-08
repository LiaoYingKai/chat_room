/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
	visible:PropTypes.bool,
	onToggleModal:PropTypes.func,
};

class NewRoomModal extends Component {
	render() {
		const { visible, onToggleModal } = this.props;

		return (
			<div className="new-room-modal" style={ visible ? { display: 'block', } : { display: 'none' } }>
				<p className="new-room-modal__title">新增聊天室</p>
				<input placeholder="聊天室名稱" type="text"></input>
				<div className="new-room-modal__people-of-room">
					限制
					<div className="new-room-modal__select">
						<select>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>
					人
					<span>(上限30人)</span>
				</div>
				<div className="new-room-modal__set-password">
					<input type="checkbox"></input>
					設密碼
					<input placeholder="XXXX" type="text"></input>
				</div>
				<div className="new-room-modal__select">
					<select>
						<option value="公開">公開</option>
						<option value="私密">私密</option>
					</select>
				</div>
				<div className="new-room-modal__comment">
					<p >//公開:顯示在聊天室大廳任何人都能加入</p>
					<p >//私密:只能用搜尋聊天室才能找到</p>
				</div>
				<div className="new-room-modal__button-group">
					<span 
						className="new-room-modal__button"
						onClick={onToggleModal}
					>[確定]</span>
					<span 
						className="new-room-modal__button"
						onClick={onToggleModal}
					>[取消]</span>
				</div>
			</div>
		);
	}
}

NewRoomModal.propTypes = propTypes;

export default NewRoomModal;