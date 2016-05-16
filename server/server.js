var express = require('express');

var app = express();

//Add middleware/routing functionality:
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(8000);

module.exports = app;