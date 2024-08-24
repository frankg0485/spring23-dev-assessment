import express from 'express';
import { getAnimals } from '../api/animal.js';
import { getUsers } from '../api/user.js';
import { getTrainingLogs } from '../api/trainingLog.js';

const adminRouter = express();

adminRouter.all("*", (req, res, next) => {
    if (req.query['page'] == undefined || req.query['page'] < 1) req.query['page'] = 1;
    next();
});

adminRouter.get('/users', (req, res) => {
    getUsers(req.query['page'])
    .then((queryResults) => {
        res.status(queryResults.statusCode);
        res.json(queryResults.users)
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
})

adminRouter.get('/animals', (req, res) => {
    getAnimals(req.query['page'])
    .then((queryResults) => {
        res.status(queryResults.statusCode);
        res.json(queryResults.animals);
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
})

adminRouter.get('/training', (req, res) => {
    getTrainingLogs(req.query['page'])
    .then((queryResults) => {
        res.status(queryResults.statusCode);
        res.json(queryResults.trainings);
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
})

export default adminRouter;