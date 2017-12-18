import React from 'react';
import uuid from 'uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="grid-x align-center">
                    <div className="large-4 medium-6 small-11">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
