const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const errorDebugger = require('debug')('app:error');

module.exports = {
  startupDebugger,
  dbDebugger,
  errorDebugger
}