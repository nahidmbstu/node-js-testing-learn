"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/user", function(req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/addUser", function(req, res) {
  res.status(201).json({ data: `user ${req.body.name} has been added` });
});

app.listen(3050);

module.exports = app;
