var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var SchemaModel = new Schema({
    email: String,
    date: Date,
    from: String
});

// Compile model from schema
module.exports = mongoose.model('CSPEmailSubScription', SchemaModel);
