import {
	CREATE_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAIL,
} from '../../actions/action-type';

import { LoadingStatusEnums } from '../../lib/LoadingStatusEnums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = {
	loadStatus: NONE,
	errorMessage: '',
};

export default function status(state = initState, action) {
	switch (action.type) {
		case CREATE_ROOM: {
			return {
				loadStatus: LOADING,
				errorMessage: '',
			};
		}
		case CREATE_ROOM_SUCCESS: {
			return {
				loadStatus: SUCCESS,
				errorMessage: '',
			};
		}
		case CREATE_ROOM_FAIL: {
			return {
				loadStatus: FAILED,
				errorMessage: action.error,
			};
		}
		default: {
			return state;
		}
	}
}