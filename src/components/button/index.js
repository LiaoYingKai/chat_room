import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

const defaultProps = {
	onClick: () => {},
};

function Button({ onClick, className, children }) {
	return (
		<button
			onClick={onClick}
			className={className}
		>
			{children}
		</button>
	);
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;