import React from 'react';
import uuid from 'uuid';
import moment from 'moment';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoAPI from 'TodoAPI';

export default class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos(),
            completedAt: undefined
        }
    }
    componentDidUpdate () {
        TodoAPI.setTodos(this.state.todos);
    }
    handleAddTodo (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix()
                }
            ]
        });
    }
    handleToggle (id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    }
    handleSearch (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
    render () {
        const {todos, showCompleted, searchText} = this.state;
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}
