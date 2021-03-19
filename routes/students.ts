import express from 'express';
let router = express.Router();

import { createStudent } from '../controllers/students';

router.route('/').post(createStudent);

export default router;
