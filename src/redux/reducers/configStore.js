import { applyMiddleware, combineReducers, createStore } from 'redux';
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from '../saga/rootSaga';
import LoadingReducer from './LoadingReducer'
import HistoryReducer from './HistoryReducer'
import UserReducer from './UserReducer'

const middlewareSaga = createMiddlewareSaga();

const rootReducer = combineReducers({
    LoadingReducer,
    HistoryReducer,
    UserReducer,
})

const store = createStore(rootReducer, applyMiddleware(middlewareSaga));

middlewareSaga.run(rootSaga);

export default store;

