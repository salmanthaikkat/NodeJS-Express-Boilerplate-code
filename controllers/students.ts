import { Request, Response, NextFunction } from 'express';
import { models } from 'mongoose';
import Student from '../models/student';

export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let newStudent = await Student.create({
      name: req.body.name,
      age: req.body.age,
    });

    res.status(201).json({
      success: true,
      message: 'Student created succesfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
