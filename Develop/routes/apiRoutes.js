const express = require("express");
const logger = require("morgan");

const router= express.Router();

var express = require("express");
var router = express.Router();
const Workout = require("../models/workout.js");


module.exports = function(app) {
  
  router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
  });
  
  router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },

    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
};

module.exports = router; 