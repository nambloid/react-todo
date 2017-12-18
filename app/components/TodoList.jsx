import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';

export class TodoList extends React.Component {
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
                    <Todo key={todo.id} {...todo}/>
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

export default connect(
    (state) => {
        return {
            todos: state.todos
        }
    }
)(TodoList);
