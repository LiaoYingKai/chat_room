import {
	CONNECTION,
	CONNECTION_SUCCESS,
	CONNECTION_FAIL,
} from '../../actions/action-type';

import { LoadingStatusEnums } from '../../lib/LoadingStatusEnums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = {
	status: 'unconnection',
	loadStatus: NONE,
	errorMessage: '',
};

export default function status(state = initState, action) {
	switch (action.type) {
		case CONNECTION: {
			return {
				status: 'on connection',
				loadStatus: LOADING,
				errorMessage: '',
			};
		}
		case CONNECTION_SUCCESS: {
			return {
				status: action.userStatus,
				loadStatus: SUCCESS,
				errorMessage: '',
			};
		}
		case CONNECTION_FAIL: {
			return {
				status: 'connection fail',
				loadStatus: FAILED,
				errorMessage: action.error,
			};
		}
		default: {
			return state;
		}
	}
}