var mongoose = require('mongoose');
var schema = mongoose.Schema;

var product = new schema({
    title: String,
    price: Number,
    likes: Number
});

module.exports = mongoose.model('Product', product);