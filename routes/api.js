import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import adminRouter from './admin.js';
import UserModel from '../models/user.js';
import { addAnimal } from '../api/animal.js';
import { addUser, loginUser, verifyUser } from '../api/user.js';
import { addTrainingLog } from '../api/trainingLog.js';

dotenv.config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_STRING, async (err, user) => {
        if (err) return res.sendStatus(403);
        else if (!(await UserModel.exists({ _id: user._id }))) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

const apiRouter = express();
apiRouter.use('/admin', verifyJWT, adminRouter);


apiRouter.get('/health', (req, res) => {
    res.json({
        "healthy": true
    })
})

apiRouter.post('/user', (req, res) => {
    addUser(req.body)
    .then((status) => {
        res.sendStatus(status);
    })
})

apiRouter.post('/user/login', (req, res) => {
    loginUser(req.body)
    .then((status) => {
        res.sendStatus(status);
    })
})

apiRouter.post('/user/verify', (req, res) => {
    verifyUser(req, res);
})

apiRouter.post('/animal', verifyJWT, (req, res) => {
    addAnimal(req.user, req.body)
    .then((status) => {
        res.sendStatus(status);
    })
})

apiRouter.post('/training', verifyJWT, (req, res) => {
    addTrainingLog(req.user, req.body)
    .then((status) => {
        res.sendStatus(status);
    })
})

export default apiRouter;