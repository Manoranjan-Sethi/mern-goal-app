const express = require("express");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 8080; //comming from .env process.env.PORT

const app = express();

//middleware to read the body send to the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));
