const express = require("express");
const fs = require("fs");
const app = express ();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.use(express.json())
app.use (express.urlencoded({extended:true}))

const file = "db/db.json"

function savedNotes(){
    fs.writeFileSync(file, JSON.stringify(list))
}

function loadingNotes(){
    const loadNotes= JSON.parse(fs.readFileSync(file, "utf8"))
    return loadNotes
}

let list = loadingNotes()

app.get("/api/notes", function(req, res){
   res.send(list)
   
});

app.post("/api/notes", function(req, res){
    let newNote = req.body
    newNote.id = Date.now()
list.push(newNote)
savedNotes()
res.send(newNote)
    
});

app.delete("/api/notes/:id", function(req, res){
    const notesId = req.params.id
    res.send({id: notesId})
    savedNotes()
    list = list.filter(note =>note.id != noteId)
});



app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`)
});