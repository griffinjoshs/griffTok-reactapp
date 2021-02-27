const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;

var corsOptions = {
    origin: 'http://localhost:3000',
};

require('./server/config/mongoose.config')

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require('./server/routes/subscriber.routes')(app)

app.listen(PORT, () => console.log(`http://localhost:${PORT}/api`))
