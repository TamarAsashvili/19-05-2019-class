const express = require ('express');
const userRouter = require('./user-router')
const app = express();

//app.use ('/api/users', userRouter);


app.get('/api/users/:id', (req, res, next)=>{
    console.log('[1] GET /api/users', req.params.id);
    //res.sendStatus(200);
    next();
});

app.get('/api/users/:id', (req, res)=>{
    console.log('[2] GET /api/users', req.params.id);
    res.sendStatus(200);
});




app.listen(1337, err=> {
    if(err)
    throw err;

    console.log(`listening on port 1337`);
});
