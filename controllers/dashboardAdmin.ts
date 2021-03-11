import { Request, Response, NextFunction } from 'express';
import Admin from '../models/dashboardAdmin';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let hashedPassword = await bcrypt.hashSync(req.body.password, 8);
    let adminUser = await Admin.create({
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: 'Admin creted succesfully',
    });
  } catch (e: any) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const adminUser = await Admin.findOne({ email: req.body.email });
    if (adminUser) {
      const validPassword = await bcrypt.compareSync(req.body.password, adminUser.password);
      if (!validPassword) {
        return res.status(400).json({
          success: false,
          message: 'Invalid credentials'
        })
      }
      const token = generateToken(adminUser.email);
      return res.status(200).json({
        success: true,
        email: adminUser.email,
        token
      })
    }

    return res.status(400).json({
      success: false,
      message: 'Invalid credentials'
    })

  } catch(e) {
    res.status(400).json({
      success: false,
      message: e?.message,
    });
  }
}

const generateToken = (email: string) => {
  return jwt.sign(email, process.env.TOKEN_SECRET as string);
}