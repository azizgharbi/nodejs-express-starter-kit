var users=require('../controller/UserController');

app.get('/',users.findUser);
app.get('/pro',users.findUserPromise);
app.get('/add',users.createUser);
