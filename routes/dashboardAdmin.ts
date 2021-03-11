import express from 'express';
let router = express.Router();

import { createAdmin, loginAdmin } from '../controllers/dashboardAdmin';

router.route('/').post(createAdmin);
router.route('/login').post(loginAdmin);

export default router;
