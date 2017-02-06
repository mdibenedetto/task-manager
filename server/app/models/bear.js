
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    seq: { type: Number, default: 0 },
    name: String
});

module.exports = mongoose.model('Bear', BearSchema);




    // - User
    //     - id
    //     - name
    //     - email
    //     - passoword