function load(router) {
    var Task = require('../models/task');

    var setTask = function (req, task) {
        var task = task || new Task();
        task.title = req.body.title;
        task.description = req.body.description;
        task.endDate = req.body.endDate;
        return task;
    };
    router.route('/tasks')
        .post(function (req, res) {
            var task = setTask(req, null);;

            task.save(function (err) {
                err && res.send(err);
                res.json({
                    message: 'Task created!'
                });
            });
        })
        .get(function (req, res) {
            Task.find(function (err, tasks) {
                err && res.send(err);
                res.json(tasks);
            });
        });

    router.route('/tasks/:_id')
        .get(function (req, res) {
            Task.findById(req.params._id, function (err, task) {
                err && res.send(err);
                res.json(task);
            });
        })
        .put(function (req, res) {
            Task.findById(req.params._id, function (err, task) {
                err && res.send(err);
                // setTask(req, task);

               
                task.title = req.body.title;
                task.description = req.body.description;
                task.endDate = req.body.endDate;

                err && res.send(err);
                res.json({
                    task:task,
                    message: 'Task updated!'
                });
                // Task.findById(req.params._id, function (err, task) {
                //     err && res.send(err);
                //     res.json({
                //         message: 'Task updated!',
                //         task: task
                //     });
                // });
            });

        })
        .delete(function (req, res) {
            Task.remove({
                _id: req.params._id
            }, function (err, task) {
                err && res.send(err);
                res.json({
                    message: 'Successfully deleted'
                });
            });
        });
}

module.exports.load = load;