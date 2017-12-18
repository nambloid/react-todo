import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import expect from 'expect';

import * as actions from 'actions';
import { Todo } from 'Todo';

describe('[Todo]', () => {

    it('should exist', () => {
        expect(Todo).toBeTruthy();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        const todoData = {
            id : 199,
            text: 'Test text',
            completed: true
        };
        const action = actions.startToggleTodo(todoData.id, !todoData.completed);
        const spy = expect.createSpy();
        const todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        const $el = $(ReactDOM.findDOMNode(todo));

        ReactTestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
