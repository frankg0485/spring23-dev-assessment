import express from 'express';
import { getAnimals } from '../api/animal.js';
import { getUsers } from '../api/user.js';
import { getTrainingLogs } from '../api/trainingLog.js';

const adminRouter = express();

adminRouter.get('/users', (req, res) => {
    getUsers()
    .then((users) => {
        res.status(200);
        res.json(users)
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
})

adminRouter.get('/animals', (req, res) => {
    getAnimals()
    .then((animals) => {
        res.status(200);
        res.json(animals);
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
})

adminRouter.get('/training', (req, res) => {
    getTrainingLogs()
    .then((trainings) => {
        res.status(200);
        res.json(trainings);
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
})

export default adminRouter;