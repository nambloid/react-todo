import expect from 'expect';

const actions = require('actions');

describe('[Actions]', () => {
    it('should generate set search text action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Test seach text'
        };
        let res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate toggleShowCompleted action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        let action = {
            type: 'ADD_TODO',
            text: 'Test text'
        };
        let res = actions.addTodo(action.text);

        expect(res).toEqual(action);
    });

    it('should generate toggleTodo action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: '123'
        };
        let res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });
});
