var readdirSync = require('fs').readdirSync;
var basename = require('path').basename;

var commons = {};

readdirSync('./lib').forEach(function (filename) {
	var name = basename(filename, '.js');
	commons[name] = require(__dirname + '/lib/' + name);
});

module.exports = commons;
