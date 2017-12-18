import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

export class AddTodo extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    }
    render () {
        const {id, text} = this.props;

        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="Add todo"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo);
