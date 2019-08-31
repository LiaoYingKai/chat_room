import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, } from 'react-router-dom';
import Container from '../../components/container';
import './style.scss';

const propTypes = {

};

function InputNicknamePage() {
	return (
		<Container className="input-nickname">
			<p>暱稱聊天</p>
			<input placeholder="輸入暱稱"></input>
			<NavLink to="/select-mode"> [確定] </NavLink>
		</Container>
	);
}

InputNicknamePage.propTypes = propTypes;

export default InputNicknamePage;