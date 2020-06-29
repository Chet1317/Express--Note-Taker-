const express = require("express");
const fs = require("fs");
const { json } = require("express");
const app = express ();
const PORT = 3000;

app.use(express.static('public'))

app.use(express.json())
app.use (express.urlencoded({extended:true}))

const fileName = db.json

let noteList = loadNotes

function saveNotes(){
    fs.writeFileSync(fileName, JSON.stringify(noteList))
}

function loadNotes(){
    fs.readFileSync(fileName, "utf8")
    return loadNotes
}

app.get("/api/notes", function(req, res){
   res.send(noteList)

});

app.post("/api/notes", function(req, res){
    let newNote = req.body
    newNote.id = Date.now()
noteList.push(newNote)
saveNotes()
res.send(newNote)
    
});

app.delete("/api/notes/:id", function(req, res){
    const noteId = req.params.id
    res.send({id: noteId})
    saveNotes()
    noteList = noteList.filter(note =>note.id != noteId)
});



app.listen(PORT, function(){
    console.log('App listening on PORT' + PORT)
});