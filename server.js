require('dotenv').config();
const path = require("path");
const express = require("express");
const passport = require('passport');
const localStrategy = require('./authentication/passportAuth');
const authCheck = require('./authMiddleware/jwtAuth');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'))

require('./authentication/passportAuth')

require('./config/dbConnection')(mongoose);

const Stash = require('./api/models/StashSchema');

const authRoutes = require('./api/routes/authRoutes');

app.use('/authRoute', authRoutes)

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From my Express' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/client/public/index.html'));
})

app.listen(PORT, ()=> {
  console.log(`App running on port ${PORT}`)
})

app.post("/additem", (req, res) => {

  const newStash = new Stash({
    category: req.body.category,
    name: req.body.name,
    quantity: req.body.quantity
 })
 
 newStash
    .save()
    .then( stash => res.json({
       category: stash.category,
       name: stash.name,
       quantity: stash.quantity
       })
    )
    .catch(err => console.log(err));

});

app.get("/fullstash", (req, res) => {
  Stash.find({})
  .then((result) => res.json(result))
  .catch((error) => res.send(error))
});

app.put("/fullstash/saved:id", (req, res) => {
  db.Stash.findByIdandUpdate({_id: req.params.id}, {quantity: req.params.quantity})
    .then(response => console.log('updated quantity', response))
    .catch(error => console.log('error changing quantity', error))
});

app.delete("/fullstash/saved:id", (req, res) => {
  db.Stash.findByIdandRemove({_id: req.params.id})
    .then(response => console.log('removed', response))
    .catch(error => console.log('remove error', error))
});
