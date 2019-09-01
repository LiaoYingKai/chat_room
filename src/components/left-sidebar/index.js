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
				Hello world
			</div>
		);
	}
}

LeftSidebar.propTypes = propTypes;

export default LeftSidebar;