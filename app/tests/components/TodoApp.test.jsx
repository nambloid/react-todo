import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {

    it('should exist', () => {
        expect(TodoApp).toBeTruthy();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        const todoText = 'Test text';
        const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id : 11,
            text: 'Test text',
            completed: false
        };
        var todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: [todoData]});
        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});
