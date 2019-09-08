import {
	GET_ROOM_LIST,
} from '../../actions/action-type';

const initState = [];

export default function status(state = initState, action) {
	switch (action.type) {
		case GET_ROOM_LIST: {
			return action.list;
		}
		default: {
			return state;
		}
	}
}