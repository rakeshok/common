var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

// Disable the emitter's max listeners warning
emitter.setMaxListeners(0);

module.exports = emitter;
