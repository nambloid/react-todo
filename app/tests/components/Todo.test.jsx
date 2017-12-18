import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import expect from 'expect';

import { Todo } from 'Todo';

describe('[Todo]', () => {

    it('should exist', () => {
        expect(Todo).toBeTruthy();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {
            id : 199,
            text: 'Test text',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        ReactTestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: todoData.id
        });
    });

});
