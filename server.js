const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;
const path = require('path');

var corsOptions = {
    origin: 'http://localhost:3000',
};

require('./server/config/mongoose.config')

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

require('./server/routes/subscriber.routes')(app)

app.listen(PORT, () => console.log(`http://localhost:${PORT}/api`))
