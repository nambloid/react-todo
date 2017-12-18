import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, { firebaseRef } from 'app/firebase/';
import * as actions from 'actions';

const createMockStore = configureMockStore([thunk]);

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
            todo: {
                id: '123abc',
                text: 'Test todo text',
                completed: false,
                createdAt: 0
            }
        };
        const res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore();
        const todoText = 'Todo text to test';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });

    it('should generate update todo action object', () => {
        const action = {
            type: 'UPDATE_TODO',
            id: '123',
            updates: {
                completed: false
            }
        };
        const res = actions.updateTodo(action.id, action.updates);

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

    describe('Tests with firebase todos', () => {
        let testTodoRef = undefined;

        beforeEach((done) => {
            testTodoRef = firebaseRef.child('todos').push();

            testTodoRef.set({
                text: 'Todo text to test',
                completed: false,
                createdAt: 12345
            }).then(() => done());
        });

        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockeAction = store.getActions();

                expect(mockeAction[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });

                expect(mockeAction[0].updates).toInclude({
                    completed: true
                });

                expect(mockeAction[0].updates.completedAt).toBeTruthy();
                done();
            }, done());
        });
    });
});
