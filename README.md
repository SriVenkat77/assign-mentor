# Mentor-Student API

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/username/assign-mentor.git
    ```

2. Navigate to the project directory:
    ```bash
    cd assign-mentor
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Endpoints

- `POST /api/mentor/create`: Create a new mentor.
- `POST /api/student/create`: Create a new student.
- `POST /api/assign/assign`: Assign a student to a mentor.
- `PUT /api/changeMentor/change`: Change the mentor for a student.
- `GET /api/studentsByMentor/mentor/:mentorId`: Get all students for a particular mentor.
- `GET /api/previousMentor/student/:studentId`: Get the previously assigned mentor for a student.
