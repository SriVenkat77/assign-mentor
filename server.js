const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');


const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
    console.error('MongoDB connection error: Missing MONGODB_URI');
    process.exit(1); // Exit the application if no URI is provided
}

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Export the connection object to use in other modules
module.exports = dbConnection;

app.use(express.json());

const mentorRoutes = require('./routes/mentor');
const studentRoutes = require('./routes/student');
const assignRoutes = require('./routes/assign');
const changeMentorRoutes = require('./routes/changeMentor');
const studentsByMentorRoutes = require('./routes/studentsByMentor');
const previousMentorRoutes = require('./routes/previousMentor');

app.use('/api/mentor', mentorRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/assign', assignRoutes);
app.use('/api/changeMentor', changeMentorRoutes);
app.use('/api/studentsByMentor', studentsByMentorRoutes);
app.use('/api/previousMentor', previousMentorRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
