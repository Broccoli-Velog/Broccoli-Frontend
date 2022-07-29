import {createStore, combineReducers} from 'redux';
import note from './modules/note'
import comment from './modules/comment'

const rootReducer = combineReducers({note, comment});
const store = createStore(rootReducer);

export default store;