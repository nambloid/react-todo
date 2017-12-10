import React from 'react';
import uuid from 'uuid';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Dog the walk',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Feed the cat',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Cat the feed',
                    completed: true
                }
            ]
        }
    }
    handleAddTodo (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    }
    handleToggle (id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
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
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}
