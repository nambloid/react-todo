import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {id, text, completed, createdAt, completedAt} = this.props;

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
            <div onClick={() => this.props.onToggle(id)}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
}
