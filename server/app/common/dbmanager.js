 function load(config) {
    var mongoose = require('mongoose');
    // mongoose.connect('mongodb://node:node@ds131729.mlab.com:31729/node-db-test');
    mongoose.connect(config.database);


    var conn = mongoose.connection;
    conn.on('error', console.error.bind(console, 'connection error:'));
}

module.exports.load = load;