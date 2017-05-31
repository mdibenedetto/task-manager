function load(router, session) {
    function getFakeUser(userName) {
        if (userName === 'admin') {
            return {
                id: 1,
                userName: userName,
                isAdmin: true
            };
        }
        return {
            id: 2,
            userName: userName,
            isAdmin: false
        };
    }
    router.route('/logout')
        .get(function(req, res) {
            req.session.userName = '';
            req.session.destroy();
            res.json({
                status: 'ok',
                message: 'User is logged out'
            });
        });

    router.route('/login')
        .post(function(req, res) {
            session = req.session;
            if (req.session.userName) {
                var user = getFakeUser(req.body.userName);
                res.json({
                    status: 'ok',
                    message: 'User is already ' + session.userName + ' logged in!',
                    user: user
                });
            } else {
                var user = getFakeUser(req.body.userName);
                req.session.userName = req.body.userName;

                res.json({
                    status: 'ok',
                    message: 'User logged in!',
                    user: user
                });
            }
        }).get(
            function(req, res) {
                if (req.session.userName) {
                    res.json({
                        status: 'ok',
                        message: 'User is already ' + session.userName + ' logged in!',
                        user: getFakeUser(req.session.userName)
                    });
                }
            }
        );


}

module.exports.load = load;