import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';

import TodoSearch from 'TodoSearch';

describe('[TodoSearch]', () => {
    it('should exist', () => {
        expect(TodoSearch).toBeTruthy();
    });

    it('should call onSearch with entered input text', () => {
        const searchText = 'Dog';
        const spy = expect.createSpy();
        const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        ReactTestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Dog');
    });

    it('should call on search with proper checked value', () => {
        const spy = expect.createSpy();
        const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});
