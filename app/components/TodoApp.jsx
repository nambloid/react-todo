import React from 'react';

import TodoList from 'TodoList';

export default class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
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
    render () {
        var {todos} = this.state;
        return (
            <div>
                TodoApp Component
                <TodoList todos={todos} />
            </div>
        )
    }
}
