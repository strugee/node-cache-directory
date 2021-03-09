'use strict';

var vows = require('perjury'),
    assert = vows.assert;

vows.describe('cache-directory module').addBatch({
	'When we require() the module': {
		topic: function() {
			return require('./index.js');
		},
		'it works': function(err, cacheDirectory) {
			assert.ifError(err);
			assert.isFunction(cacheDirectory);
		}
	}
}).export(module);
