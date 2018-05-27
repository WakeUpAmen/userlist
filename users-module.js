'use strict';
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserListSchema   = new Schema({
    firstname: String,
	lastname: String,
    sex: String,
    age: Number,
    pwd: String
});

module.exports = mongoose.model('Users', UserListSchema);
