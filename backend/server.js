const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000; //comming from .env process.env.PORT

const app = express();

//middleware to read the body send to the server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server listening on ${port}`));
