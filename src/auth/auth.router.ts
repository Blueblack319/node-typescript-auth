/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express';

export const authRouter = express.Router();

/**
 * Controller Definitions
 */

// POST signin
authRouter.post('/login', (req: Request, res: Response) => {
  const session = req.session;

  if (req.body) {
    const { email, nickName } = req.body;
    if (!req.session.isLoggedIn) {
      session.email = email;
      session.nickName = nickName;
      session.isLoggedIn = true;
      session.save(() => {
        res.send({ result: true });
      });
    } else {
      res.send({ error: 'Already Logged In' });
    }
  }
});

// GET welcome
