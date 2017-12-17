import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import expect from 'expect';

import Todo from 'Todo';

describe('[Todo]', () => {

    it('should exist', () => {
        expect(Todo).toBeTruthy();
    });

    it('should call onToggle prop with id on click', () => {
        var todoData = {
            id : 199,
            text: 'Test text',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        ReactTestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(199);
    });

});
