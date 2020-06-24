const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET all orders that have been placed, populate with data from the pizza collection
router.get("/", (req, res) => {
  console.log("GET /feedback");
  // Find all orders and return them
  pool
    .query('SELECT * FROM "feedback" ORDER BY id DESC;')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /feedback", error);
      res.sendStatus(500);
    });
});

//Post for new feedback
router.post("/", (req, res) => {
  //take out the incoming object
  const obj = req.body;

  //insert into the database
  const insertData = `INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`;
  const enterFeedback = [
    obj.feeling,
    obj.understanding,
    obj.support,
    obj.comments,
  ];
  console.log(req.body);
  
  //send to database
  pool
    .query(insertData, enterFeedback)
    .then((result) => {
      console.log(result.rows);
      //if successful send status message
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making entry ${insertData}`, error);
      //if unsuccessful send status message
      res.sendStatus(500);
    });
});

module.exports = router;
