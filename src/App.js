import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import Editor from "./Components/Editor";
import Sidebar from "./Components/Sidebar";

const App = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    const [currentNoteId, setCurrentNoteId] = useState((notes[0] && notes[0].id) || "");

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const createNewNote = () => {
        const newNote = {
            id: uuidv4(),
            entry: notes.length + 1,
            text: "Lorem ipsum dolor sit ameut",
        };

        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    };

    const deleteNote = (event, id) => {
        event.stopPropagation();
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    const updateNote = (text) => {
        const newNotes = [];

        notes.forEach((note) => {
            if (note.id === currentNoteId) {
                newNotes.unshift({ ...note, text: text });
            } else {
                newNotes.push(note);
            }
        });

        setNotes(newNotes);
    };

    const findCurrentNote = () => {
        return notes.find((note) => note.id === currentNoteId) || notes[0];
    };

    return (
        <>
            {notes.length > 0 ? (
                <main className="note-app">
                    <Sidebar notes={notes} currentNote={findCurrentNote()} setCurrentNoteId={setCurrentNoteId} createNewNote={createNewNote} deleteNote={deleteNote} />
                    <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
                </main>
            ) : (
                <div className="welcome-screen">
                    <h1 className="welcome-title">No notes available</h1>
                    <button className="btn btn-primary" onClick={createNewNote}>
                        Create new note
                    </button>
                </div>
            )}
        </>
    );
};

export default App;
