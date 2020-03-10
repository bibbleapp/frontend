import { combineReducers } from 'redux';
import library from './library';
import search from './search';
import authentication from './authentication';
import book from './book'

export default combineReducers({
	authentication,
	library,
	search,
	book
});
