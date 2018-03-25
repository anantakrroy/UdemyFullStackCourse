var mongoose = require('mongoose');
var schema = mongoose.Schema;

var wishItem = new schema({
	title: String,
	price: Number,
	likes: Number
});

module.exports = mongoose.model('WishItem', wishItem);