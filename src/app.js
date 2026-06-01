"use strict";
const express = require("express");
const cors = require("cors");
const time = require("./process-time.js");
const app = express();

app.use(cors());

app.all("/12", (req, res) => {
  res.status(200).json(time().hour12);
});

app.all("/24", (req, res) => {
  res.status(200).json(time().hour24);
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Routes exist only with the names /12 and /24."
  })
})

app.use((err, req, res) => {
  console.log("-error-->", err.message);
  res.status(500).send("Server Error");
})

module.exports = app;
