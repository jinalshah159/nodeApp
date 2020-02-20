const express = require('express');
const morgan = require('morgan')

const mongooseRef = require('./db/connection')
const user = require('./routes/user');
const {
  startupDebugger
} = require('./utils/debugger');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/user', user);

if (app.get('env') === 'development') {
  startupDebugger('App is starting with morgan in development env')
}

const port = process.env.PORT || 3000;
app.listen(port, () => startupDebugger(`Listening on port ${port}...`));