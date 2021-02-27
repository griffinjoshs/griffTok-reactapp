const mongoose = require('mongoose')

mongoose
.connect('mongodb://localhost/grifftokdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
})
.then(() => console.log('Connected To Database!!'))
.catch(err => console.log('error:' + err))
