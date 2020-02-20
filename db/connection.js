let mongoose = require('mongoose');
const {dbDebugger} = require('../utils/debugger')

mongoose.connect('mongodb://localhost/userapp', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => dbDebugger('connected suceesfully'))
    .catch((err) => dbDebugger('error..', err))

module.exports = mongoose;