import { combineReducers } from 'redux';
import status from './reducer/status';
import createRoom from './reducer/createRoom';
import roomList from './reducer/roomList';


const musicPlayer = combineReducers({
	status,
	createRoom,
	roomList,
});

export default musicPlayer;