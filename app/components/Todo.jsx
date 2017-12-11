import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {id, text, completed, createdAt, completedAt} = this.props;
        let todoClassName = completed ? 'todo todo-completed' : 'todo';

        var renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ hh:mm a');
        };

        return (
            <div className={todoClassName} onClick={() => this.props.onToggle(id)}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}
