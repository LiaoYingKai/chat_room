import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { NavLink, } from 'react-router-dom';
import Container from '../../components/container';
import cx from 'classnames';
import { connect } from 'react-redux';
import { updateUserStatus } from '../../actions/socket-actions';
import './style.scss';

const propTypes = {
	updateUserStatus: PropTypes.func,
	user: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
};

class InputNicknamePage extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
			isEmpty: false,
			placeholder: '輸入暱稱',
		};
		this._handleChangeValue = this._handleChangeValue.bind(this);
		this._handleVerificationInput = this._handleVerificationInput.bind(this);
	}
	_handleChangeValue(event) {
		this.setState({
			isEmpty: false,
			value: event.target.value,
		});
	}
	_handleVerificationInput(event) {
		const { value } = this.state;
		const { updateUserStatus, user, } = this.props;

		if (!value) {
			event.preventDefault();
			this.setState({
				isEmpty: true,
				placeholder: '暱稱不能爲空'
			});
			return;
		}
		updateUserStatus(user, value);
	}
	render() {
		const { _handleVerificationInput, _handleChangeValue } = this;
		const { value, isEmpty, placeholder } = this.state;

		return (
			<Container className="input-nickname">
				<p>暱稱聊天</p>
				<input 
					placeholder={placeholder}
					value={value} 
					onChange={(event) => {_handleChangeValue(event);}}
					className={cx({ 'input-nickname__empty-input': isEmpty })}
				></input>
				<NavLink to="/select-mode" onClick={(event) => {_handleVerificationInput(event);}}> [確定] </NavLink>
			</Container>
		);
	}
}

InputNicknamePage.propTypes = propTypes;

function mapStateToProps(state) {
	return {
		user: state.userStatus.status
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateUserStatus: (user, userName) => dispatch(updateUserStatus(user, 'name', userName))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(InputNicknamePage);
