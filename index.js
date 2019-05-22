const express = require ('express');
const userRouter = require('./user-router')
const app = express();

//app.use ('/api/users', userRouter);


app.use ('/api/users/:id', async (req, res, next)=>{
    console.log('[1] GET /api/users', req.params.id);
    const user = sessionTable.getUser(req.session.id);
    //res.sendStatus(200);
    if (user.id !== req.params.id) {
        return res.sendStatus(401);
    }
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
