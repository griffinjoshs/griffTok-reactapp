const { Subscriber } = require('../models/subscriber.model');

module.exports = {
    index: (request, response) => {
        response.json({ message: 'Backend Server Running' });
    },
    // Read Methods --> app.get
    allSubscribers: (request, response) => {
        Subscriber.find({})
        .then((subscribers) => response.json({ message: 'success', results: subscribers })
        )
        .catch((error) => response.json({ message: 'error', results: error }))
    },
    oneSubscriber: (request, response) => {
        Subscriber.findOne({ _id: request.params.id })
        .then((subscriber) => response.json({ message: 'success', results: subscriber })
        )
        .catch((error) => response.json({ message: 'error', results: error }))
    },
    // Create Method --> app.post
    newSubscriber: (request, response) => {
        Subscriber.create(request.body)
        .then(subscriber => 
            response.json({ message: 'success', results: subscriber })
            )
            .then((subscriber) => response.json({ message: 'success', results: subscriber })
        )
        .catch((error) => response.json({ message: 'error', results: error }))
    },
    //  Update method --> app.put (or app.patch)
    editSubscriber: (request, response) => {
        Subscriber.findOneAndUpdate({ _id: request.params.id }, request.body, {
            runValidators: true,
            new: true
        })
        .then(subscriber => 
            response.json({ message: 'success', results: subscriber })
            )
            .then((subscriber) => response.json({ message: 'success', results: subscriber })
        )
        .catch((error) => response.json({ message: 'error', results: error })
        )
    },
    // Delete method --> app.delete
    deleteSubscriber: (request, response) => {
        Subscriber.findOneAndDelete({ _id: request.params.id })
        .then(subscriber => 
            response.json({ message: 'success', results: subscriber })
            )
            .then((subscriber) => response.json({ message: 'success', results: subscriber })
        )
        .catch((error) => response.json({ message: 'error', results: error })
        )
    }
};

