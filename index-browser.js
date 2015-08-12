
// Utility functions
exports.addApostrophe       = require('./util/addApostrophe');
exports.buildObject         = require('./util/buildObject');
exports.capitalize          = require('./util/capitalize');
exports.compactObject       = require('./util/compactObject');
exports.deep                = require('./util/deep');
exports.easingPattern       = require('./util/easingPattern');
exports.emptyFunction       = require('./util/emptyFunction');
exports.escapeForRegex      = require('./util/escapeForRegex');
exports.extractStopwords    = require('./util/extractStopwords');
exports.firstWord           = require('./util/firstWord');
exports.getHTML             = require('./util/getHTML');
exports.getLinks            = require('./util/getLinks');
exports.getTeaser           = require('./util/getTeaser');
exports.hasSameProperties   = require('./util/hasSameProperties');
exports.highlight           = require('./util/highlight');
exports.isEmail             = require('./util/isEmail');
exports.isObjectId          = require('./util/isObjectId');
exports.isURL               = require('./util/isURL');
exports.parseJSON           = require('./util/parseJSON');
exports.permute             = require('./util/permute');
exports.pluralize           = require('./util/pluralize');
exports.pushUnique          = require('./util/pushUnique');
exports.randomGarbage       = require('./util/randomGarbage');
exports.randomString        = require('./util/randomString');
exports.removeHTML          = require('./util/removeHTML');
exports.removeNewlines      = require('./util/removeNewlines');
exports.removeTrailingSlash = require('./util/removeTrailingSlash');
exports.sanitizeUrl         = require('./util/sanitizeUrl');

// Browser-only functions
exports.getTopOffset        = require('./browser-util/getTopOffset');
exports.openPopup           = require('./browser-util/openPopup');
exports.smoothScroll        = require('./browser-util/smoothScroll');

// Instances
exports.emitter             = require('./instances/emitter');

// Stopwords
exports.stopwordsAll        = require('./stopwords/stopwordsAll');
exports.stopwordsUrl        = require('./stopwords/stopwordsUrl');

// Regexes
exports.emailRegex          = require('./regex/emailRegex');
exports.objectIdRegex       = require('./regex/objectIdRegex');
exports.urlRegex            = require('./regex/urlRegex');
