import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from 'configureStore';
import TodoApp from 'TodoApp';

const actions = require('actions');
const store = configureStore();

store.subscribe(() => {
    console.log('New state:', store.getState());
});

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render((
    <Router>
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    </Router>
), document.getElementById('app'));
