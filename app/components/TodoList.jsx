import React from 'react';

import Todo from 'Todo';

export default class TodoList extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {todos} = this.props;

        var todosList = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        });

        return (
            <div>
                {todosList}
            </div>
        );
    }
}
