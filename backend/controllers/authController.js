import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js';
import { errorHandler } from '../utilities/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
  
    
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword });
      
    try {
      await newUser.save()
      res.status(201).json('User created succesfully')
    }
    catch (error) {
        next(error)
        console.log(error)
    }
   
};
  


export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const validUser = await User.findOne({ username });
    if (!validUser) return next(errorHandler(404, 'User not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Verify your password and try again'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie('access-token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  }
  catch (error) {
    next(error)
  }
}















export const googleSignUp = async (req, res, next) => {
  try { 
  const user = await User.findOne({email:req.body.email})
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res.cookie('access-token', token, { httpOnly: true })
      .status(200)
      .json(rest);
    }
    else {
      const generatedPassword = Math.random().toString(36).slice(-8) 
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10)
      const newUser = new User({
        username: req.body.username.toLowerCase() + Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res.cookie('access-token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  }
  }
  catch (error) {
    next(error)
  }
} 






export const signOutUser = async (req, res, next) => {
  try {
    res.clearCookie('access-token')
    res.status(200).json('User has been logged out')
  } catch (error) {
    next(error)
  }
}