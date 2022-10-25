const express = require("express");
const cors = require("cors");
const port = 5000;

const categories = require("./db/categories.json");
const courses = require("./db/courses.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
