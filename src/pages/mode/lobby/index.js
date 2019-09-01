import React from 'react';
import Button from '../../../components/button';
import './style.scss';

function Lobby() {
	return (
		<div className="lobby">
			<Button>隨機1對1配對</Button>
			<Button>隨機進入群組</Button>
			<Button>新增聊天室</Button>
		</div>
	);
}

export default Lobby;