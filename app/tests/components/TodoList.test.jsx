import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import expect from 'expect';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toBeTruthy();
    });

    it('should render one Todo component for each todo item', () => {
        const todos = [{
                id: 1,
                text: 'text on'
            }, {
                id: 2,
                text: 'text two'
            }, {
                id: 3,
                text: 'text three'
            }];

        const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const todoComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        const todos = [];

        const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});
