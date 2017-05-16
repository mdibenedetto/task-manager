 function load(config) {
     var mongoose = require('mongoose');
     try {
         mongoose.connect(config.database, function (err) {
         if (err) {
             return  console.error('dbmanager:load():' + err.message);
         }
     });
         var conn = mongoose.connection;
         conn.on('error', console.error.bind(console, 'connection error:'));
     } catch (err) {
         console.log('dbmanager:load():' + err.message);
     }

 }

 module.exports.load = load;