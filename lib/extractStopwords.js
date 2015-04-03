var _ = require('lodash');
var stripTags = require('striptags');
var stopwordsAll = require('./stopwordsAll');

function extractStopwords(str, options) {
    if( _.isEmpty(str) )
        return [];

    if( _.isEmpty(options) )
        options = { return_changed_case: true };

    options.stopwords = options.stopwords || stopwordsAll;

    var return_changed_case = options.return_changed_case,
        text = stripTags(str).trim();

    if( _.isEmpty(text) )
        return [];

    var words = text.split(/\s/),
        unchanged_words = [],
        low_words = [];

    //  change the case of all the words
    for (var x = 0;x < words.length; x++) {
        var w = words[x].match(/https?:\/\/.*[\r\n]*/g) ? words[x] : words[x].replace(/\.|,|;|!|\?|\(|\)|:|"|^'|'$/g,'');    //  remove periods, question marks, exclamation points, commas, and semi-colons

        if( w.length === 1 )
            w = w.replace(/-|_|@|&|#/g,'');

        //  if it's a number, remove it
        var digits_match = w.match(/\d/g);

        if( digits_match && digits_match.length === w.length )
            w = "";

        if( w.length > 0 ) {
            low_words.push(w.toLowerCase());
            unchanged_words.push(w);
        }
    }

    var results = [];

    for( var y = 0; y < low_words.length; y++ ) {
        if (options.stopwords.indexOf(low_words[y]) < 0) {
            var result_word = return_changed_case && !unchanged_words[y].match(/https?:\/\/.*[\r\n]*/g) ? low_words[y] : unchanged_words[y];
            results.push(result_word);
        }
    }
    return results;
}

module.exports = extractStopwords;
