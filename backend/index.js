const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

// Serve static files including images
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// JSON server setup
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);

// Read data from db.json
const dbFilePath = path.join(__dirname, 'db.json');
const rawData = fs.readFileSync(dbFilePath);
const data = JSON.parse(rawData);

app.get('/api/services', (req, res) => {
  res.json(data.services);
});

app.get('/api/team', (req, res) => {
  res.json(data.team);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
  console.log(`JSON Server is running on port ${PORT}...`);
});