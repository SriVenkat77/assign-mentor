const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/student/:studentId', async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId).populate('mentor');
        if (!student) return res.status(404).json({ error: 'Student not found' });

        res.status(200).json(student.mentor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
