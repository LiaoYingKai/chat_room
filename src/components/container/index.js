import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
	]),
	className: PropTypes.string,
};

function Container({ children, className }) {
	return (
		<div className="container__outter">
			<div className={cx('container__inner', className)}>
				{children}
			</div>
		</div>
	);
}

Container.propTypes = propTypes;

export default Container;