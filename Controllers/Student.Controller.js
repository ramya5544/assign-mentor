import StudentModel from '../Models/Student.Schema.js';

export const createStudent = async (req, res) => {
  try {
    const studentDetails = await StudentModel.create(req.body);
    console.log(studentDetails);
    res.status(201).json({ message: 'Student created successfully', data: studentDetails });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ message: 'Error in creating student', error });
  }
};