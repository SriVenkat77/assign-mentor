const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Mentor = require('../models/mentor');

router.put('/change', async (req, res) => {
    try {
        const { studentId, mentorId } = req.body;
        const student = await Student.findById(studentId);
        if (!student) return res.status(404).json({ error: 'Student not found' });

        const mentor = await Mentor.findById(mentorId);
        if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

        student.mentor = mentorId;
        await student.save();

        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
