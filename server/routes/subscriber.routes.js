const SubscriberController = require('../controller/subscriber.controller');

module.exports = function (app) {
    app.get('/api', SubscriberController.index);
    app.get('/api/subscribers', SubscriberController.allSubscribers);
    app.get('/api/subscribers/:id', SubscriberController.oneSubscriber);
    app.post('/api/subscribers', SubscriberController.newSubscriber);
    app.put('/api/subscribers/:id', SubscriberController.editSubscriber);
    app.delete('/api/subscribers/:id', SubscriberController.deleteSubscriber);
}

