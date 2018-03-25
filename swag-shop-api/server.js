var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop-api');

var Product = require('./model/product');
var WishList = require('./model/product');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function() {
    console.log("Swag Shop API running on port 3000...");
})