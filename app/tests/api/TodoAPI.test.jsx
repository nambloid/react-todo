import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('[TodoAPI]', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toBeTruthy();
    });

    describe('setTodos', () => {

        it('should set valid todos array', () => {
            let todos = [{
                id: 23,
                text: 'Test text',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            let badTodos = {a: 'b'};

            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBeFalsy();
        });

    });

    describe('getTodos', () => {

        it('should return empty array for bad localStorage data', () => {
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localStorage', () => {
            let todos = [{
                id: 23,
                text: 'Test text',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });

    });

    describe('filterTodos', () => {

        const todos = [{
            id: 1,
            text: 'Some text one',
            completed: true
        }, {
            id: 2,
            text: 'Other text',
            completed: false
        }, {
            id: 3,
            text: 'Some text two',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should not return completed items when showCompleted is false', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos[0].completed).toBeFalsy();
        });

        it('should filter todos by searchText', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

    });
});
