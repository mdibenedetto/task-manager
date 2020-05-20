 var spawn = require('child_process').spawn;

 var mongod = spawn('/X_Devs/mongodb/bin/mongod', []);

 mongod.stdout.on('data', function(stdout) {
     console.log('stdout ' + stdout);
 })

 mongod.stderr.on('data', function(stderr) {
     console.warn('stderr ' + stderr);
 })

 var mongo = spawn('/X_Devs/mongodb/bin/mongo', []);
 mongo.stdout.on('data', function(stdout) {
     console.log('stdout ' + stdout);
 });