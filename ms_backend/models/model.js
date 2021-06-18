const mongoose = require('mongoose');

const user = mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    userCreatedTime :{
        type : Date,
        default : Date.now
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type :String,
        required : true
    }
}, { 
    collection : 'users'
});

const userModel = mongoose.model('user',user);

module.exports = userModel; 