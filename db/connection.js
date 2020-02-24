let mongoose = require('mongoose');
const {
  dbDebugger
} = require('../utils/debugger')

mongoose.connect('mongodb://localhost/userapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => dbDebugger('connected suceesfully'))
  .catch((err) => dbDebugger('error..', err))

module.exports = mongoose;