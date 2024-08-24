import express from 'express';
import adminRouter from './admin.js';
import { addAnimal } from '../api/animal.js';
import { addUser, loginUser } from '../api/user.js';
import { addTrainingLog } from '../api/trainingLog.js';

const apiRouter = express();
apiRouter.use('/admin', adminRouter);

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

apiRouter.post('/animal', (req, res) => {
    addAnimal(req.body)
    .then((status) => {
        res.sendStatus(status);
    })
})

apiRouter.post('/training', (req, res) => {
    addTrainingLog(req.body)
    .then((status) => {
        res.sendStatus(status);
    })
})

export default apiRouter;