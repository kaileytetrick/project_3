const express = require('express');
const Stash = require('../models/StashSchema');
const router = express.Router();

router.get("/fullstash", (req, res) => {
  Stash.find({})
  .then((result) => res.json(result))
  .catch((error) => res.send(error))
});

router.post("/additem", (req, res) => {

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
  
  router.put('/fullstash/:id', (req,res) => {
      console.log(req.params.id);
      console.log(req.body.quantity);
    Stash.update(
      { _id: req.params.id },
      { quantity: req.body.quantity }
    )
      .then( response => {
        res.json({response})
      })
      .catch(error => console.log('error', error))
  });
  
  router.delete("/fullstash/:id", (req, res) => {
    Stash.findOneAndDelete({_id: req.params.id})
      .then(response => res.json({ response }))
      .catch(error => console.log('error removing', error))
  });

  module.exports = router