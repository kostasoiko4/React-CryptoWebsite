// imports
const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json({ limit: "25mb" })); // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(cors());

// send app to main router
const mainRouter = require("./api/main.router");
app.use("/v1", mainRouter);

// run Server
const port = 5000 //process.env.PORT;
app.listen(port, () => {
  console.log("Server running on port " + port);
});

module.exports = app;
