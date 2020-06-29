const express = require("express");
const fs = require("fs")
const app = express ();
const PORT = 3000;

app.use(express.static('public'))

app.use(express.json())
app.use (express.urlencoded({exntended:true}))



app.listen("/api/notes", function(){
    console.log('App listening on PORT' + PORT)
});
