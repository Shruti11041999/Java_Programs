
var express = require("express")
var app = express()

app.get('/getdata', functions(req, res){

console.log("API is hit")
res.send("Hello India")

})

app.listen(4000);
