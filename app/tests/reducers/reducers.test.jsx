import expect from 'expect';
const deepFreeze = require('deep-freeze-strict');

const reducers = require('reducers');

describe('[Reducers]', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Test search text'
            };
            const res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            const action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            const res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            const action = {
                type: 'ADD_TODO',
                todo: {
                    id: '123abc',
                    text: 'Todo test text',
                    completed: false,
                    createdAt: 12345
                }
            };
            const res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should add existing todos', () => {
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
            const res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

        it('should update todo', () => {
            const todos = [{
                id: '123',
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];
            const updates = {
                completed: false,
                completedAt: null
            }
            const action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };
            const res = reducers.todosReducer(deepFreeze(todos), deepFreeze(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });
    });
});
