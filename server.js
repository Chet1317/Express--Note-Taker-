const express = require("express");

const app = express ();
const PORT = 3000;

app.use(express.static('html'))

app.use(express.json())
app.use (express.urlencoded({exntended:true}))

const noteList = [];

app.get("/api/notes", function(req, res){
    res.send(...something...)
});
