import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils';

import AddTodo from 'AddTodo';

describe('[AddTodo]', () => {
    it('should exist', () => {
        expect(AddTodo).toBeTruthy();
    });

    it('should call onAddTodo prop with valid data', () => {
        const textToTest = 'Text to test';
        var spy = expect.createSpy();
        var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = textToTest;
        ReactTestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(textToTest);
    });

    it('should not call onAddTodo prop when invalid input', () => {
        const textToTest = '';
        var spy = expect.createSpy();
        var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = textToTest;
        ReactTestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});
