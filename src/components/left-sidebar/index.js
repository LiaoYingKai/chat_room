import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import ChatRoom from '../chat-room-list';
import CreateRoomButton from '../../feature/createRoomButton';

import './style.scss';

const propTypes = {
	onClick: PropTypes.func,
	isClose: PropTypes.bool,
};

const defaultProps = {
	onClick: () => {},
};

class LeftSidebar extends Component {
	render() {
		const { onClick, isClose } = this.props;

		return (
			<div className="left-sidebar">
				<div 
					style={ isClose ? { display: 'block' } : { display: 'none' } } 
					onClick={onClick}
					className="left-sidebar__title--close"
				>
					聊天大廳
				</div>
				<div style={ isClose ? { display: 'none' } : { display: 'block' } }>
					<div className="left-sidebar__title" onClick={onClick}>
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
					<CreateRoomButton className="left-sidebar__button"/>
				</div>

			</div>
		);
	}
}

LeftSidebar.propTypes = propTypes;
LeftSidebar.defaultProps = defaultProps;

export default LeftSidebar;