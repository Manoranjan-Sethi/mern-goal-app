const mongoose = require("mongoose");

const goalScheme = mongoose.Schema(
  {
    //every goal field is associated with a user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //reference to the userModel
    },
    text: {
      type: "string",
      required: [true, "please add a text description"],
    },
  },
  {
    timestamps: true, //creation of timestamp
  }
);

module.exports = mongoose.model("Goal", goalScheme);
