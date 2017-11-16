var notes = require('./../controllers/users.js');

var path = require('path');

module.exports = function(app){

    app.post('/notes', function(req, res){
        // console.log('in notes we can write to database', req.body.text);  
        notes.create(req, res);
        
    })

    app.get('/notes', function(req, res){
        // console.log('in notes we can write to database', req.body.text);  
        notes.index(req, res);
        
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}