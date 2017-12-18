import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import configureStore from 'configureStore';
import TodoApp from 'TodoApp';
import TodoList from 'TodoList';

describe('[TodoApp]', () => {

    it('should exist', () => {
        expect(TodoApp).toBeTruthy();
    });

    it('should render TodoList', () => {
        const store = configureStore();
        const provider = ReactTestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp/>
            </Provider>
        );

        const todoApp = ReactTestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        const todoList = ReactTestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toEqual(1);
    });
});
