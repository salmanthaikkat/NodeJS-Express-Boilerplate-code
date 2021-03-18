import express from 'express';
import {
  getProductCategories,
  addProductCategories,
} from '../controllers/productCategory';
let router = express.Router();

router.route('/').get(getProductCategories).post(addProductCategories);

export default router;
