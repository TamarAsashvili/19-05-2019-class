
const express = require ('express');
const userRouter = require('./user-router')
const app = express();

app.use ('/api/users', userRouter);

app.listen(1337, err=> {
    if(err)
    throw err;

    console.log(`listening on port 1337`);
});












