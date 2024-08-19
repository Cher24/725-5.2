// controllers/courseController.js
const Course = require('../models/course');

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.render('courses', { courses });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
