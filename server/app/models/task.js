var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({ 
    title: String,
    description: String,
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date,
    assigneId:  {
        type: Number,
        default:0
    },
}); 

var autoIncrement = require('../../node_modules/mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

TaskSchema.plugin(autoIncrement.plugin, 'Task');

module.exports = mongoose.model('Task', TaskSchema);

