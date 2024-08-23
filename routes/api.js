import express from 'express';
import { addAnimal } from '../api/animal.js';

const apiRouter = express();
apiRouter.get('/health', (req, res) => {
    res.json({
        "healthy": true
    })
})

apiRouter.post('/user', (req, res) => {
    res.json({
        "healthy": true
    })
})

apiRouter.post('/animal', (req, res) => {
    addAnimal(req.body);
    res.json({
        "healthy": true
    })
})

apiRouter.post('/training', (req, res) => {
    res.json({
        "healthy": true
    })
})

export default apiRouter;