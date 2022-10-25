const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

const categories = require("./db/categories.json");
const courses = require("./db/courses.json");
const instructors = require("./db/instructors.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

// Get all Categories
app.get("/categories", (req, res) => {
  res.send(categories);
});

// Get single Category
app.get("/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  selectedCategory = categories.find((category) => category.id === categoryId);
  res.send(selectedCategory);
});

// Get all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// Get single course
app.get("/courses/:id", (req, res) => {
  const courseId = req.params.id;
  selectedCourse = courses.find((course) => course.id === courseId);
  res.send(selectedCourse);
});

// Get all Instructor
app.get("/instructors", (req, res) => {
  res.send(instructors);
});

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
