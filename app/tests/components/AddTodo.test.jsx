import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils';

import * as actions from 'actions';
import { AddTodo } from 'AddTodo';

describe('[AddTodo]', () => {
    it('should exist', () => {
        expect(AddTodo).toBeTruthy();
    });

    it('should dispatch ADD_TODO with valid todo text', () => {
        const textToTest = 'Text to test';
        const action = actions.startAddTodo(textToTest);
        let spy = expect.createSpy();
        let addTodo = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = textToTest;
        ReactTestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        const textToTest = '';
        let spy = expect.createSpy();
        let addTodo = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = textToTest;
        ReactTestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});
