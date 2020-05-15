const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const UserPageSchema = new Schema({
    userhandle: String,
    description: String,
    userid: String,
    links: []
}); 

//Model
const UserPage = mongoose.model('UserPage', UserPageSchema);

module.exports = UserPage;