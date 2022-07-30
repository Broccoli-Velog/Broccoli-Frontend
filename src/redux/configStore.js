import {createStore, combineReducers, applyMiddleware} from 'redux';
import note from './modules/note'
import user from './modules/user'

// 미들웨어용
import thunk from "redux-thunk"

const middlewares = [thunk];
const rootReducer = combineReducers({note, user});
const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer);

export default store;