import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import expect from 'expect';

import configureStore from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

describe('[TodoList]', () => {
    it('should exist', () => {
        expect(TodoList).toBeTruthy();
    });

    it('should render one Todo component for each todo item', () => {
        const todos = [{
                id: 1,
                text: 'text on',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }, {
                id: 2,
                text: 'text two',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }, {
                id: 3,
                text: 'text three',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }];
        const store = configureStore({
            todos
        });
        const provider = ReactTestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        const todoList = ReactTestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        const todoComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todoComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        const todos = [];

        const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});
