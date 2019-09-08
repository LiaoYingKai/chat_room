import {
	CONNECTION,
	CONNECTION_SUCCESS,
	CONNECTION_FAIL,
	CREATE_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAIL,
	GET_ROOM_LIST,
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

export function connectionSuccess(userStatus) {
	return {
		type: CONNECTION_SUCCESS,
		userStatus
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
		socket.on('connectionSuccess', userStatus => {
			dispatch(connectionSuccess(userStatus));
		});
		socket.on('connectionFail', () => {
			console.log('failed');
			dispatch(connectionSuccess());
		});
		dispatch(getChatRoomList());
		// socket.on('getMessage', message => {
		// 	console.log(message);
		// });
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

export function createChatRoom(roomInfo) {
	return dispatch => {
		dispatch(createRoom());
		socket.emit('createRoom', roomInfo);
		socket.on('createRoomSuccess', () => {
			dispatch(createRoomSuccess());
		});
		socket.on('createRoomFail', () => {
			dispatch(createRoomFail());
		});
	};
}

export function getRoomList(list) {
	return {
		type: GET_ROOM_LIST,
		list,
	};
}

export function getChatRoomList() {
	return dispatch => {
		socket.on('getRoomList', (list) => {
			dispatch(getRoomList(list));
		});
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
