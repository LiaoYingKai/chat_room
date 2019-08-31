import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
	]),
};

function Container({ children }) {
	return (
		<div className="container__outter">
			<div className="container__inner">
				{children}
			</div>
		</div>
	);
}

Container.propTypes = propTypes;

export default Container;