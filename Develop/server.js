const express = require("express");
const fs = require("fs")
const app = express ();
const PORT = 3000;

app.use(express.static('public'))

app.use(express.json())
app.use (express.urlencoded({extended:true}))



app.listen(PORT, function(){
    console.log('App listening on PORT' + PORT)
});

app.get("/api/notes", function(req, res){
    res.send()
});

app.post("/api/notes", function(req, res){
    res.send()
});

app.delete("/api/notes", function(req, res){
    res.send()
});
