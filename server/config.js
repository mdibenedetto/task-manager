module.exports = {
    'port': process.env.PORT || 5000,
    // 'database': 'mongodb://localhost:27017/task-manager',
    'database': 'mongodb://node:node@ds131729.mlab.com:31729/node-db-test',
    'secret': 'myTaskManagerpasswordComingSoon',
    'baseUrl': 'http://localhost:3000',
    'smtpConfig': {
        'host': 'smtp.zoho.com',
        'port': 465,
        'secure': true, // use SSL
        'auth': {
            'user': '',
            'pass': ''
        }
    }
};