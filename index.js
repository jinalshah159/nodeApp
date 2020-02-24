const express = require('express');
const morgan = require('morgan')

// eslint-disable-next-line no-unused-vars
const mongooseRef = require('./db/connection')
const user = require('./routes/user');
const project = require('./routes/project');
const technology = require('./routes/technology');

const {
  startupDebugger
} = require('./utils/debugger');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/user', user);
app.use('/api/project', project);
app.use('/api/technology', technology)

if (app.get('env') === 'development') {
  startupDebugger('App is starting with morgan in development env')
}

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => startupDebugger(`Listening on port ${port}...`));