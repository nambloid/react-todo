import React from 'react';

export default class Todo extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {id, text} = this.props;

        return (
            <div>
                {id}. {text}
            </div>
        )
    }
}
