var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content: {type: String},
    date: { type: Date, default: Date.now }
})

mongoose.model('Note', NoteSchema);