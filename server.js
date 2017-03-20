const express = require('express');
const db = require('./db');
const path = require('path');
const app = express();

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/users', (req, res, next)=> {
  db.models.User.findAll()
  .then( users => res.send(users));
});

app.delete('/api/users/:id', (req, res, next)=> {
  db.models.User.destroy({ where: { id: req.params.id}})
  .then( users => res.sendStatus(200));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> console.log(`listening on port ${port}`));


db.seed();
