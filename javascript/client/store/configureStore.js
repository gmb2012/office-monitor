import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        combineReducers(rootReducer),
        initialState,
        applyMiddleware(thunk, createLogger())
    );

    return store;
}
