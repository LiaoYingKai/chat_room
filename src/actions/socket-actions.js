import {
	CONNECTION,
	CONNECTION_SUCCESS,
	CONNECTION_FAIL,
	CREATE_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAIL,
	ADD_ROOM,
	ADD_ROOM_SUCCESS,
	ADD_ROOM_FAIL,
	LEAVE_ROOM,
	LEAVE_ROOM_SUCCESS,
	LEAVE_ROOM_FAIL,
	SEND_MESSAGE,
	SEND_MESSAGE_SUCCESS,
	SEND_MESSAGE_FAIL,
	GET_MESSAGE,
	GET_MESSAGE_SUCCESS,
	GET_MESSAGE_FAIL,
} from './action-type';
import io from 'socket.io-client';

let socket;

export function connection() {
	return {
		type: CONNECTION,
	};
}

export function connectionSuccess() {
	return {
		type: CONNECTION_SUCCESS,
	};
}

export function connectionFail(error) {
	return {
		type: CONNECTION_FAIL,
		error,
	};
}

export function connectionSocket() {
	return dispatch => {
		dispatch(connection());
		socket = io('http://localhost:8888');
		socket.on('connect', () => {
			dispatch(connectionSuccess());
		});
	};
}

export function createRoom() {
	return {
		type: CREATE_ROOM,
	};
}

export function createRoomSuccess() {
	return {
		type: CREATE_ROOM_SUCCESS,
	};
}

export function createRoomFail() {
	return {
		type: CREATE_ROOM_FAIL,
	};
}

export function addRoom() {
	return {
		type: ADD_ROOM,
	};
}

export function addRoomSuccess() {
	return {
		type: ADD_ROOM_SUCCESS,
	};
}

export function addRoomFail() {
	return {
		type: ADD_ROOM_FAIL,
	};
}
export function leaveRoom() {
	return {
		type: LEAVE_ROOM,
	};
}

export function leaveRoomSuccess() {
	return {
		type: LEAVE_ROOM_SUCCESS,
	};
}

export function leaveRoomFail() {
	return {
		type: LEAVE_ROOM_FAIL,
	};
}
export function sendMessage() {
	return {
		type: SEND_MESSAGE,
	};
}

export function sendMessageSuccess() {
	return {
		type: SEND_MESSAGE_SUCCESS,
	};
}

export function sendMessageFail() {
	return {
		type: SEND_MESSAGE_FAIL,
	};
}
export function getMessage() {
	return {
		type: GET_MESSAGE,
	};
}

export function getMessageSuccess() {
	return {
		type: GET_MESSAGE_SUCCESS,
	};
}

export function getMessageFail() {
	return {
		type: GET_MESSAGE_FAIL,
	};
}
