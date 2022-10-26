const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

const categories = require("./db/categories.json");
const courses = require("./db/courses.json");
const instructors = require("./db/instructors.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Home Route");
});
// Get all Categories
app.get("/categories", (req, res) => {
  res.send(categories);
});

// Get ALL courses by Category id
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id === "01") {
    res.send(courses);
  } else {
    const category_course = courses.filter((n) => n.category_id === id);
    res.send(category_course);
  }
});

// Get all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// Get single course by Id
app.get("/courses/:id", (req, res) => {
  const courseId = req.params.id;
  selectedCourse = courses.find((course) => course.id === courseId);
  res.send(selectedCourse);
});

// Get all Instructor
app.get("/instructors", (req, res) => {
  res.send(instructors);
});

// Get all courses by Instructor Id
app.get("/instructors/:id", (req, res) => {
  const id = req.params.id;

  const instructors_courses = courses.filter(
    (course) => course.instructor_id === id
  );
  res.send(instructors_courses);
});

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
