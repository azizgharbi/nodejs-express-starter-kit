var User= require('../model/users.js');  // import the User model

module.exports = {


// find users mongoose
findUser:function(req,res){
   User.find({},function(err,obj){
   res.send(obj);
  })
},

// find user with promise and Update Exemple

 /*
* == sort , limit and select ==
* exemple : User.find({}).sort({name:1}).limit(2).execAsync().then ...
* to filter obj we need to use .select('name email') or -name to select all excepet the name */

findUserPromise:function(req,res){

  User.findOne({name:"aziz"}).exec()
    .then(function(user){
       user.name="paul";
       user.save();
       return user;
       })
    .then(function(user){
          res.send(user);
          return user ;
         })
    .catch(function(err){
       console.log(err);
       });
},
// find All user
indexPromise:function(req,res){

  User.find({}).exec()
    .then(function(user){
       res.render('home',{users:user})
       })
    .catch(function(err){
       console.log(err);
       });
},
// about
about:function(req,res){
  res.render('about');
},
// createUser
CreateUserPromise:function(req,res){
  User.create(req.body)
    .then(function(user){
       res.redirect("/");
       })
    .catch(function(err){
       console.log(err);
       });
},
// deleteUser
destroy:function(req,res){
  var query = {"_id": req.params.id};
  User.findOneAndRemove(query, function(err, user){
    console.log(user)
    res.redirect('/');
  });
},
//create function Simple exemple
createUser:function(req,res){
var user = new User (req.body);
user.save();
res.redirect('/');
}


};
