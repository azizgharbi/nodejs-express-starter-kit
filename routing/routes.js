var users=require('../controller/UserController');

app.get('/',users.findAllUserPromise);
app.post('/',users.CreateUserPromise);
app.get('/:id',users.DeleteUserPromise);
