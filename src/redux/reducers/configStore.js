import { applyMiddleware, combineReducers, createStore } from 'redux';
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from '../saga/rootSaga';
import LoadingReducer from './LoadingReducer'
import HistoryReducer from './HistoryReducer'
import UserReducer from './UserReducer'
import ProjectCategoryReducer from './ProjectCategoryReducer'
import ProjectReducer from './ProjectReducer'
import DrawerReducer from './DrawerReducer'

const middlewareSaga = createMiddlewareSaga();

const rootReducer = combineReducers({
    LoadingReducer,
    HistoryReducer,
    UserReducer,
    ProjectCategoryReducer,
    ProjectReducer,
    DrawerReducer,
})

const store = createStore(rootReducer, applyMiddleware(middlewareSaga));

middlewareSaga.run(rootSaga);

export default store;

