const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//register new user
//route POST/api/users/
//access routes public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //check every credentials
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all required fields");
  }

  //check if user already exists
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hash password
  //salt - Means the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash.
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //if user is created successfully then
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(403);
    throw new Error("Invalid user data");
  }
});

//authenticate user
//route POST/api/users/login
//access routes public
const loginUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(403);
    throw new Error("Invalid credentials");
  }
});

//route POST/api/users/me
//access routes private
const getMe = asyncHandler(async (req, res) => {
  // const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json(req.user);
});

//generate JWT tokens
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, loginUser, getMe };
