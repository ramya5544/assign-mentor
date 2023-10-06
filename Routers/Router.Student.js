import express from 'express';
import { createStudent } from '../Controllers/Student.Controller.js';

const router = express.Router();

router.post('/createstudent', createStudent);

export default router;