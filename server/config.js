module.exports = {
    'port': process.env.PORT || 8081,
    'database': 'mongodb://localhost:27017/task-manager',
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