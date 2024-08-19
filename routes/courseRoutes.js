// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('c:/practicourse/controllers/coursecontroller'); // Correct path

router.get('/courses', courseController.getCourses);

module.exports = router;
