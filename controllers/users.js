const User = require('../models/user');

//read methods
exports.listAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err)
            res.send(err);
        res.json(users);
    });
};

//insert methods
exports.insertUser= function(req, res) {
    let newUser = new User(req.body);
    console.log(newUser);
    newUser.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
        console.log(err + user);
    });
};
//try-catch are implicit thanks to the express-promise-router lib
exports.signIn = async(req,res,next) => {
    User.findOne({username:req.body.username}, (err, user) => {
        if (!user) return res.send(('Cannot find user.'));
        if (err) return res.send(err);
        if (req.body.password === user.password) {
            return res.send(user);
        }
        else return res.send('Invalid password');
    })
};

