import { combineReducers } from 'redux';
import connectionStatus from './reducer/connectionStatus';
import userStatus from './reducer/userStatus';
import createRoom from './reducer/createRoom';
import roomList from './reducer/roomList';


const musicPlayer = combineReducers({
	connectionStatus,
	userStatus,
	createRoom,
	roomList,
});

export default musicPlayer;