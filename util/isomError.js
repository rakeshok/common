var StandardError = require('standard-error');
var statuses = require('statuses');

/**
 * @param status {number} - An http status code representing the error
 * @param message {string} - A message for client/server if no server message, just for client if server message
 * @param serverMessage {string} - A message for the client
 */

function IsomError(status, biMessage, serverMessage) {

  //Validate the function is called as a constructor
  if (!(this instanceof IsomError)) {
    return new IsomError(status, biMessage, serverMessage);
  }

  //We need at least an status
  if (!status) {
    throw new StandardError({ message: 'Status is needed to create an error' });
  }

  //The status should be a valid http status code
  if (!statuses[status] || statuses[status] === "(Unused)") {
    throw new StandardError({ message: 'Status should be a valid http code' });
  }

  //If there is only status send the status code strign to both (server & client)
  else if (!biMessage) {
    serverMessage = biMessage = statuses[status];
  }

  //If there is no server message the biMessage is for both (server & client)
  else if(!serverMessage) {
    serverMessage = biMessage;
  }

  //Create the error
  StandardError.call(this,  serverMessage, { status: status, clientMessage: biMessage  });
}

IsomError.prototype = Object.create(StandardError.prototype, {
  constructor: {value: IsomError, configurable: true, writable: true}
});

module.exports = IsomError;
