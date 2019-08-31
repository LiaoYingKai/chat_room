import React, { Component, } from 'react';
import { NavLink, } from 'react-router-dom';
import Container from '../../components/container';
import cx from 'classnames';
import './style.scss';

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

		if (!value) {
			event.preventDefault();
			this.setState({
				isEmpty: true,
				placeholder: '暱稱不能爲空'
			});
		}
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

export default InputNicknamePage;