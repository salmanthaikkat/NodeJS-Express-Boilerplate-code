import { Request, Response, NextFunction, request } from 'express';
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

export const findStudent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        let student = await Student.findOne({
            name: req.params.name
        });
        res.status(200).json({
            success: true,
            message: 'Student fetched',
            student
        });


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export const updateStudent = async (
    req: Request,
    res: Response,
    next: NextFunction
)=> {
    try {
        let student = await Student.findOneAndUpdate({
            name: req.params.name
        },{
            age: req.body.age
        });

        res.status(201).json({
            success: true,
            message: 'Student age updated'
        });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const deleteStudent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let student = await Student.findOneAndDelete({
            name: req.params.name
        })
        res.status(200).json({
            success: true,
            message: 'Student data deleted'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    
}