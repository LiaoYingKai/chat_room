import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, } from 'react-router-dom';
import RouteLayout from './route';
import { connect } from 'react-redux';
import { connectionSocket } from '../actions/socket-actions';
import './style.scss';

const propTypes = {
	connection: PropTypes.func,
};

class Layout extends Component {
	render() {
		return (
			<Router>
				<RouteLayout/>
			</Router>
		);
	}
	componentDidMount() {
		this.props.connection();
	}
}

Layout.propTypes = propTypes;

function mapDispatchToProps (dispatch) {
	return {
		connection: () => dispatch(connectionSocket()),
	};
}

export default connect(null, mapDispatchToProps)(Layout);
