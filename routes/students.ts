import express from 'express';
let router = express.Router();

import { createStudent, deleteStudent, findStudent, updateStudent } from '../controllers/students';

router.route('/').post(createStudent);
router.route('/:name').get(findStudent).patch(updateStudent).delete(deleteStudent);

export default router;
