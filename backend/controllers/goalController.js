//description get goals get request
//routes GET/api/goals
//access - private routes

const asyncHandler = require("express-async-handler"); //used instead of try catch block for async

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//description set goals post request
//routes POST/api/goals
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide a text");
  }
  res.status(200).json({ message: "Set Goals" });
});

//description update goals put request
//routes PUT/api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

//description delete goals delete request
//routes DELETE/api/goals
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
