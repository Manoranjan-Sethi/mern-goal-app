const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Please enter a name."],
    },
    email: {
      type: "string",
      required: [true, "Please enter a email."],
      unique: true, //every email must be unique
    },
    password: {
      type: "string",
      required: [true, "Please enter a password."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
