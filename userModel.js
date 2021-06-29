var mongoose = require('mongoose');

//schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// export user model
var User = module.exports = mongoose.model('user', userSchema);

// add get method to user model
module.exports.get = function (callback, limit) {
   User.find(callback).limit(limit); 
}