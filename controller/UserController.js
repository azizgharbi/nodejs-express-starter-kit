var User= require('../model/users.js');  // import the User model

module.exports = {


// find users mongoose
findUser:function(req,res){
User.find({},function(err,obj){
res.send(obj);
})
},

// find user with promise


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


//create function
createUser:function(req,res){
var aziz = new User({name:"aziz"});
aziz.save();
res.redirect('/pro');
}

//for more details about promise
//http://eddywashere.com/blog/switching-out-callbacks-with-promises-in-mongoose/


};
