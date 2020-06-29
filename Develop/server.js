const express = require("express");
const fs = require("fs")
const app = express ();
const PORT = 3000;

app.use(express.static('public'))

app.use(express.json())
app.use (express.urlencoded({extended:true}))

let noteList = [
    { title: "first note placeholder title", text: "first note text", id= 1000}
]

app.get("/api/notes", function(req, res){
   res.send(noteList)
    res.send()
});

app.post("/api/notes", function(req, res){
    let newNote = req.body
    newNote.id = Date.now()

    res.send()
});

app.delete("/api/notes:id", function(req, res){
    
    res.send({id: noteId})
});

app.listen(PORT, function(){
    console.log('App listening on PORT' + PORT)
});