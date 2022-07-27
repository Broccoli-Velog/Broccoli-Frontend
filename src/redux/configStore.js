import {createStore, combineReducers} from 'redux';
import note from './modules/note'

const rootReducer = combineReducers({note});
const store = createStore(rootReducer);

export default store;