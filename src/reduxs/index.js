import { combineReducers } from 'redux';
import status from './reducer/status';

const musicPlayer = combineReducers({
	status,
});

export default musicPlayer;