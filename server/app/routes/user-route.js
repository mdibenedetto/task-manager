function load(router, session) {

    var sess;
    router.route('/login')
        .post(function(req, res) {
            session = req.session;
            if (session.userName) {
                res.json({
                    status: 'ok',
                    message: 'User is already ' + session.userName + ' logged in!'
                });
            } else {
                req.session.userName = req.body.userName;
                res.json({
                    status: 'ok',
                    message: 'User logged in!',
                });
            }
        }).get(
            function(req, res) {
                res.json({
                    userName: req.session.userName
                });
            }
        );


}

module.exports.load = load;