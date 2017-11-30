const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((request, response, next) => {
    if (request.headers['x-forwarded-proto'] === 'https') {
        response.redirect(`http://${request.hostname}${request.url}`);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Express server is up on port ${PORT}`);
});
