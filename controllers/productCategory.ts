import { NextFunction, Request, Response } from 'express';
import ProductCategory from '../models/productCategory';

export const getProductCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await ProductCategory.find();
    return res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export const addProductCategories = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { categoryName, subCategory } = req.body;
    let productCategory = new ProductCategory({
      categoryName
    });
    if (subCategory) {
      const newSubCategory = await ProductCategory.create({
        categoryName: subCategory.categoryName
      });
      productCategory.subCategory = newSubCategory;
    };
    await productCategory.save();
    return res.status(201).json({
      success: true,
      data: productCategory
    })
  } catch(e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
}