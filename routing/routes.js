var users = require('../controller/UserController');

app.get('/',users.indexPromise);
app.post('/',users.CreateUserPromise);
app.delete('/pow/:id',users.destroyPromise);
app.get('/about',users.about);
