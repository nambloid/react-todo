import React from 'react';
import uuid from 'uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

export default class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
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
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
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
                <h1 className="page-title">Todo App</h1>
                <div className="grid-x align-center">
                    <div className="large-4 medium-6 small-11">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
