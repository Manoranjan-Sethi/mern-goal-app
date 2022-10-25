//description get goals get request
//routes GET/api/goals
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

//description set goals post request
//routes POST/api/goals
const setGoals = (req, res) => {
  res.status(200).json({ message: "Set Goals" });
};

//description update goals put request
//routes PUT/api/goals/:id
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
};

//description delete goals delete request
//routes DELETE/api/goals
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
