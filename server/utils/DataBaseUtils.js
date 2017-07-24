import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Note';

const Note = mongoose.model('Note');

mongoose.Promise = global.Promise; // about promice: panding fullfill rejected

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {useMongoClient: true});
}

export function listNotes(id) {
    return Note.find(); // all notes
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function updateNote(id, data) {
    Note.findById(id, function(err, note){
        if (err) return handleError(err);
        // let Note = note.text;
        note.text += data.text;
        note.save(function (err, updatedNote) {
            if (err) return handleError(err);
            res.send(updatedNote);
        });
    });
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}
