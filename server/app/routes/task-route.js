function load(router) {
    var Task = require('../models/task');

    function raiseErrorOnConnectionClosed(req, res) {
        if (Task.db.readyState === 0)
            res.json({
                STATUS: "DB_CONNECTION_CLOSE"
            });
    }
    var buildTask = function(req, task) {
        var task = task || new Task();
        task.title = req.body.title;
        task.description = req.body.description;
        task.endDate = req.body.endDate;
        return task;
    };
    router.route('/tasks')
        .post(function(req, res) {
            raiseErrorOnConnectionClosed(req, res);
            var task = buildTask(req, null);;
            task.save(function(err) {
                err && res.send(err);
                res.json({
                    status: 'ok',
                    task: task,
                    message: 'Task created!'
                });
            });
        })
        .get(function(req, res) {
            raiseErrorOnConnectionClosed(req, res);
            Task.find(function(err, tasks) {
                err && res.send(err);
                res.json(tasks);
            });
        });

    router.route('/tasks/:_id')
        .get(function(req, res) {
            raiseErrorOnConnectionClosed(req, res);
            Task.findById(req.params._id, function(err, task) {
                err && res.send(err);
                res.json(task);
            });
        })
        .put(function(req, res) {
            raiseErrorOnConnectionClosed(req, res);
            Task.findById(req.params._id, function(err, task) {
                err && res.send(err);
                buildTask(req, task);
                task.save(function(err) {
                    err && res.send(err);
                    res.json({
                        task: task,
                        message: 'Task updated!'
                    });
                });
            });

        })
        .delete(function(req, res) {
            raiseErrorOnConnectionClosed(req, res);
            Task.remove({
                    _id: req.params._id
                },
                function(err, task) {
                    err && res.send(err);
                    res.json({
                        message: 'Successfully deleted'
                    });
                });
        });
}

module.exports.load = load;