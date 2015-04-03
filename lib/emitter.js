import { EventEmitter } from 'events';

let emitter = new EventEmitter();

// Disable the emitter's max listeners warning
emitter.setMaxListeners(0);

export default emitter;
