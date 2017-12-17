import expect from 'expect';
const deepFreeze = require('deep-freeze-strict');

const reducers = require('reducers');

describe('[Reducers]', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Test search text'
            };
            let res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            let res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                text: 'Test todo text'
            };
            let res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should add toggle todo', () => {
            let todos = [{
                id: '123',
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];
            let action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };
            let res = reducers.todosReducer(deepFreeze(todos), deepFreeze(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toBeFalsy();
        });
    });
});
