import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import ChatRoom from '../chat-room';
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
				<ChatRoom
					title={"公開聊天室（11）"}
					chatInfo={[
						{
							serialNumber: 'C001',
							chatName: '聊天室名稱',
							people: 3,
							peopleOfMax: 15,
						},
						{
							serialNumber: 'C001',
							chatName: '聊天室名稱',
							people: 3,
							peopleOfMax: 15,
						},
						{
							serialNumber: 'C001',
							chatName: '聊天室名稱',
							people: 3,
							peopleOfMax: 15,
						},
					]}
				/>
				<ChatRoom
					title={"公開聊天室（11）"}
					chatInfo={[
						{
							serialNumber: 'C001',
							chatName: '聊天室名稱',
							people: 3,
							peopleOfMax: 15,
						},
					]}
				/>
				<Button className="left-sidebar__button">
					新增聊天室
				</Button>
			</div>
		);
	}
}

LeftSidebar.propTypes = propTypes;

export default LeftSidebar;