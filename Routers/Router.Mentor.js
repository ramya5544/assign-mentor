import express from 'express';
import { createMentor, getMentorList, assignStudentToMentor, getStudentsForMentor } from '../Controllers/Mentor.Controller.js';

const router = express.Router();

router.post('/creatementor', createMentor);

router.get('/getmentor', getMentorList);

router.post('/assign', assignStudentToMentor);

router.get('/students/:mentorId', getStudentsForMentor);

export default router;