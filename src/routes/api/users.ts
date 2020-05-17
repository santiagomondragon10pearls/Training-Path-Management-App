//@ts-check
import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { check, validationResult } from 'express-validator';

import auth, { CustomRequest } from '../../middleware/auth';
import { User, UserDocument } from '../../models/User';
import defaultConfig from '../../config/default';

const router = express.Router();
const jwtSecret = defaultConfig.jwtSecret;

// @route   GET api/users/getUsersList
// @desc    Get all Users
// @acces   Public
router.get('/getUsersList', async (req: CustomRequest, res: Response) => {
  try {
    let users = await User.find().select('-password');
    if (!users) {
      return res.status(400).json({ errors: [{ msg: 'No users to display' }] });
    }
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/users
// @desc    Register User
// @acces   Private
router.post(
  '/',
  [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Plase enter a valid email').isEmail(),
  ],
  async (req: CustomRequest, res: Response) => {
    // if (req.user!.role !== 'Administrator') {
    //   return res.status(401).json({
    //     errors: [{ msg: "This action needs Administrator's permissions" }],
    //   });
    // }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, firstName, middleName, lastName } = req.body;

    // Nodemailer transporter variable
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nodejsmailingtest@gmail.com',
        pass: '091917e8f83',
      },
    });

    try {
      // Validate if User exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        role: 'user',
        email,
        firstName,
        middleName: middleName ? middleName : '',
        lastName,
      });

      await user.save();

      // Return jsonwebtoken for session porpuses
      const payload = {
        user: { id: user.id, email: user.email, role: user.role },
      };

      jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (error, token) => {
        if (error) throw error;
        res.json({ token });

        // Set your password email with jsonwebtoken
        const mailOptions = {
          from: 'nodejsmailingtest@gmail.com',
          to: user?.email,
          subject: '10Pearls Training Path Password',
          html: `<div>
            <h1>Your account to 10Pearls Training Path was successfully created.<h1>
            <p>Please click the following <a href="http://localhost:3000/setPassword/${token}">link</a> to assign your password<p>
          </div>`,
        };

        transporter.sendMail(mailOptions, function (err, info) {
          if (err) console.log('error', err);
          else console.log('success', info);
        });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   POST api/users/setPassword?
// @desc    Set password of registered user
// @acces   Public
router.post(
  '/setPassword',
  [
    check('password', 'Password s required').not().isEmpty(),
    check('confirmation', 'Confirmation is required').not().isEmpty(),
  ],
  async (req: CustomRequest, res: Response) => {
    try {
      const token = req.query.token;
      const stringedToken = token.toString();

      if (!token) {
        return res
          .status(401)
          .json({ errors: [{ msg: 'No token, action denied' }] });
      }

      if (req.body.password !== req.body.confirmation) {
        return res
          .status(401)
          .json({ errors: [{ msg: 'Password must match' }] });
      }

      const decodedToken: any = jwt.verify(stringedToken, jwtSecret);

      let user = await User.findOne({
        email: decodedToken.user.email,
      });

      if (user?.password !== undefined || user?.password !== null) {
        return res
          .status(401)
          .json({ errors: [{ msg: 'You have already set your password' }] });
      }

      const salt: string = await bcrypt.genSalt(10);
      const password: string = await bcrypt.hash(req.body.password, salt);

      const newPassword = {
        password,
      };

      if (user) {
        //Update user with selected password
        user = await User.findOneAndUpdate(
          {
            email: decodedToken.user.email,
          },
          { $set: newPassword },
          { new: true }
        );
        return res.json({ token });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);
export = router;
