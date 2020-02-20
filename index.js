const mongooseRef = require('./db/connection')
const user = require('./routes/user');
const express = require('express');
const {
  startupDebugger
} = require('./utils/debugger');
const morgan = require('morgan')

const app = express();
app.use(express.json());
app.use('/api/user', user);
app.use(morgan('tiny'));

if (app.get('env') === 'development') {
  startupDebugger('App is starting with morgan in development env')
}

const port = process.env.PORT || 3000;
app.listen(port, () => startupDebugger(`Listening on port ${port}...`));