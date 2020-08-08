const express = require("express");
var app = express();
var http = require("http").Server(app);
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const path = require("path")
// var route = require('./routes/app');

const port = process.env.PORT || 3000
;



//start server  on port 3000 and show details
app.listen(3000,"127.0.0.1", function(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    console.log("server started on port: "+ port)
    console.log("H: "+h+" "+"M: "+m)
});



//ROUTE TO FORM 
app.get('/',function(req,res){
        let filepath = path.resolve("./www/form.html");
        res.sendFile(filepath);
        });


//REDONE
// app.use(express.static(__dirname + './www'));

// app.get('/',function(req,res){
//     res.sendFile(__dirname + "./www/form.html")
//     });


//AUTHENTICATION
app.post('/api/login',function(req,res){
        let users = [{"email":"abc@me.com","password":"123"},{"email":"molly@me.com","password":"333"},{"email":"sam@me.com","password":"222"}]
        
        if (!req.body) {
            return res.sendStatus(400);
        }
            var accountholder = {}
            accountholder.email = req.body.email;
            accountholder.password = req.body.password;
            accountholder.valid = false;

        for (let i = 0;i<users.length;i++) {
            if (req.body.email == users[i].email && req.body.password == users[i].password){
                accountholder.valid == true;
            }
        }

        res.send(accountholder)
            
})
    

