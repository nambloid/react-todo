import React from 'react';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Dog the walk'
                }
            ]
        }
    }
    handleAddTodo (text) {
        alert(`New todo: ${text}`);
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
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}
