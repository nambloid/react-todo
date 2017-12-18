import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';

import { TodoSearch } from 'TodoSearch';

describe('[TodoSearch]', () => {
    it('should exist', () => {
        expect(TodoSearch).toBeTruthy();
    });

    it('should dispatch SET_SEAARCH_TEXT on input change', () => {
        const searchText = 'Dog';
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
        const spy = expect.createSpy();
        const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        ReactTestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        const action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        const spy = expect.createSpy();
        const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
