var mongoose = require('mongoose');

// setup Schema
var contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    gender: String,
    phone:String,
    crate_data:{
        type:Date,
        default:Date.now
    }
});

// Expore contactr Model
var Contact = module.exports = mongoose.model('contack', contactSchema)

module.exports.get = (callback, limit)=>{
    Contact.find(callback).limit(limit);
}