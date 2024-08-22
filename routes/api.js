import express from 'express';

const apiRouter = express();
apiRouter.get('/health', (req, res) => {
    res.json({
        "healthy": true
    })
})

export default apiRouter;