import React from 'react';

export default class AddTodo extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event) {
        event.preventDefault();
        const todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    }
    render () {
        const {id, text} = this.props;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="Add todo"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
}
