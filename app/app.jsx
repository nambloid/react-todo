import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render((
    <Router>
        <p>Boilerplate 3</p>
    </Router>
), document.getElementById('app'));
