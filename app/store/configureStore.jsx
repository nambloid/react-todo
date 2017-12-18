import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
//import ReduxThunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

var configureStore = (initialState = {}) => {
    let reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    let store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};

export default configureStore;
