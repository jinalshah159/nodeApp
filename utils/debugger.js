const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db')

module.exports = {
  startupDebugger,
  dbDebugger
}