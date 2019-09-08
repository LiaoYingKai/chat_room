import {
	USER_STATUS,
	USER_STATUS_SUCCESS,
	USER_STATUS_FAIL,
} from '../../actions/action-type';

import { LoadingStatusEnums } from '../../lib/LoadingStatusEnums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = {
	status: {},
	loadStatus: NONE,
	errorMessage: '',
};

export default function status(state = initState, action) {
	switch (action.type) {
		case USER_STATUS: {
			return {
				status: {},
				loadStatus: LOADING,
				errorMessage: '',
			};
		}
		case USER_STATUS_SUCCESS: {
			return {
				status: action.userStatus,
				loadStatus: SUCCESS,
				errorMessage: '',
			};
		}
		case USER_STATUS_FAIL: {
			return {
				status: state.status,
				loadStatus: FAILED,
				errorMessage: action.error,
			};
		}
		default: {
			return state;
		}
	}
}