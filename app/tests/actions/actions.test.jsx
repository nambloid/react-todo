import expect from 'expect';

const actions = require('actions');

describe('[Actions]', () => {
    it('should generate set search text action object', () => {
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Test seach text'
        };
        const res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate toggleShowCompleted action object', () => {
        const action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        const res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate add todo action object', () => {
        const action = {
            type: 'ADD_TODO',
            text: 'Test text'
        };
        const res = actions.addTodo(action.text);

        expect(res).toEqual(action);
    });

    it('should generate toggleTodo action object', () => {
        const action = {
            type: 'TOGGLE_TODO',
            id: '123'
        };
        const res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });

    it('should generate add todos action object', () => {
        const todos = [{
            id: '111',
            text: 'Test text one',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }];
        const action = {
            type: 'ADD_TODOS',
            todos
        };
        const res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });
});
