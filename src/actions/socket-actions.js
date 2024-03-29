import {
	CONNECTION,
	CONNECTION_SUCCESS,
	CONNECTION_FAIL,
	USER_STATUS,
	USER_STATUS_SUCCESS,
	USER_STATUS_FAIL,
	CREATE_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAIL,
	ROOM_LIST,
	JOIN_ROOM,
	JOIN_ROOM_SUCCESS,
	JOIN_ROOM_FAIL,
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

export function onSocket() {
	return dispatch => {
		socket.on('connectionSuccess', () => {
			dispatch(connectionSuccess());
		});

		socket.on('connectionFail', () => {
			dispatch(connectionFail());
		});

		socket.on('userStatusSuccess', userStatus => {
			dispatch(userStatusSuccess(userStatus));
		});

		socket.on('roomList', list => {
			dispatch(roomList(list));
		});

		socket.on('createRoomSuccess', () => {
			dispatch(createRoomSuccess());
		});
		socket.on('createRoomFail', () => {
			dispatch(createRoomFail());
		});

		socket.on('joinRoomSuccess', () => {
			dispatch(joinRoomSuccess());
		});

		socket.on('joinRoomFail', () => {
			dispatch(joinRoomFail());
		});
	};
}

export function connectionSocket() {
	return dispatch => {
		dispatch(connection());
		socket = io('http://localhost:8888');
		dispatch(onSocket());
	};
}

export function userStatus() {
	return {
		type: USER_STATUS,
	};
}

export function userStatusSuccess(userStatus) {
	return {
		type: USER_STATUS_SUCCESS,
		userStatus
	};
}

export function userStatusFail(error) {
	return {
		type: USER_STATUS_FAIL,
		error,
	};
}

export function roomList(list) {
	return {
		type: ROOM_LIST,
		list,
	};
}

export function updateUserStatus(user, key, value) {
	return dispatch => {
		dispatch(userStatus());
		if (key === 'roomId') {
			socket.emit('setUserRoomId', { user, value });
		}
		if (key === 'name') {
			socket.emit('setUserName', { user, value });
		}
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

export function createChatRoom(user, roomInfo) {
	return dispatch => {
		dispatch(createRoom());
		socket.emit('createRoom', { user, roomInfo });
		
	};
}

export function joinRoom() {
	return {
		type: JOIN_ROOM,
	};
}

export function joinRoomSuccess() {
	return {
		type: JOIN_ROOM_SUCCESS,
	};
}

export function joinRoomFail() {
	return {
		type: JOIN_ROOM_FAIL,
	};
}

export function joinChatRoom(user, id) {
	return dispatch => {
		dispatch(joinRoom());
		socket.emit('joinRoom', { user, id, });
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
