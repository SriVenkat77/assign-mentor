const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/mentor/:mentorId', async (req, res) => {
    try {
        const students = await Student.find({ mentor: req.params.mentorId });
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
