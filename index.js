const fs = require('fs');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const http = require('http');
const server = http.createServer(app);

const PORT = 3000;

app.set('views', __dirname + '/views/')
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index', {});
});

app.post('/', (req, res) => {
  fs.writeFileSync("index.html", req.body.data);
});

server.listen(PORT, () => {
  console.log(`Server work on port ${PORT}...`);
});