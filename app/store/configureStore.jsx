import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
//import ReduxThunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

export var configure = () => {
    let reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    let store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
