//access - private routes

const asyncHandler = require("express-async-handler"); //used instead of try catch block for async
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

//description get goals get request
//routes GET/api/goals
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

//description set goals post request
//routes POST/api/goals
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide a text");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

//description update goals put request
//routes PUT/api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //as a user can update his goals so
  //log in user should match the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

//description delete goals delete request
//routes DELETE/api/goals
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //as a user can update his goals so
  //log in user should match the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
