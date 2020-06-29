const express = require("express");
const fs = require("fs");
const { json } = require("express");
const app = express ();
const PORT = 3000;

app.use(express.static('public'))

app.use(express.json())
app.use (express.urlencoded({extended:true}))

const fileName = db.json

let noteList = [
    { title: "first note placeholder title", text: "first note text", id: 1000}
]

function saveNotes(){
    fs.writeFileSync(fileName, JSON.stringify(noteList))
}

app.get("/api/notes", function(req, res){
   res.send(noteList)

});

app.post("/api/notes", function(req, res){
    let newNote = req.body
    newNote.id = Date.now()
noteList.push(newNote)

res.send(newNote)
    
});

app.delete("/api/notes/:id", function(req, res){
    const noteId = req.params.id
    res.send({id: noteId})

    noteList = noteList.filter(note =>note.id != noteId)
});



app.listen(PORT, function(){
    console.log('App listening on PORT' + PORT)
});