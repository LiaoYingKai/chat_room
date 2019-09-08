import { combineReducers } from 'redux';
import status from './reducer/status';
import createRoom from './reducer/createRoom';


const musicPlayer = combineReducers({
	status,
	createRoom,
});

export default musicPlayer;