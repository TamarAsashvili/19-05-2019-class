
const express = require ('express');

const userRouter = express.Router();


//  /api/users/api/users/:id   it is in (index.js /spi/users) (user-router.js /api/users/:id); 

userRouter.get('/', (req, res)=>{
    console.log('GET /api/users');
    res.sendStatus(200);
    next();
});

userRouter.post('/', (req, res)=>{
    console.log('POST /api/users');
    res.sendStatus(200);
});

userRouter.get('/:id', (req, res)=>{
    console.log('GET /api/users/:id', req.params.id);
    res.sendStatus(200);
});

userRouter.put('/:id', (req, res)=>{
    console.log('PUT /api/users', req.params.id);
    res.sendStatus(200);
});

userRouter.delete('/', (req, res)=>{
    console.log('DELETE /api/users', req.params.id );
    res.sendStatus(200);
});


module.exports = userRouter;