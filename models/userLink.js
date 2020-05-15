const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const UserLinkSchema = new Schema({
    userid: String,
    linktitle: String,
    linktarget: String,
    
}); 

//Model
const UserLink = mongoose.model('UserLink', UserLinkSchema);

module.exports = UserLink;