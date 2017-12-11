import React from 'react';

import Todo from 'Todo';

export default class TodoList extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {todos} = this.props;

        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                );
            }

            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                )
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}
