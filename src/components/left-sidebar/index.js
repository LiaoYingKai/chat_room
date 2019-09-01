import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import NewRoomModal from '../new-room-modal';
import './style.scss';

const propTypes = {

};

class LeftSidebar extends Component {
	
	render() {
		return (
			<div className="left-sidebar">
				<div className="left-sidebar__title">
					聊天大廳
				</div>
				<div className="left-sidebar__button-group">
					<Button>隨機1對1配對</Button>
					<Button>隨機進入群組</Button>
				</div>
				<input 
					className="left-sidebar__input"
					placeholder="搜尋聊天室名稱或編號"
				></input>
				<div className="left-sidebar__chat-room">
					<div className="left-sidebar__chat-room-title">

					</div>
				</div>
				<div className="left-sidebar__chat-room">
					<div className="left-sidebar__chat-room-title">

					</div>
				</div>
				<Button className="left-sidebar__button">
					新增聊天室
				</Button>
			</div>
		);
	}
}

LeftSidebar.propTypes = propTypes;

export default LeftSidebar;