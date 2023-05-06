import React from "react";

const Sidebar = ({ notes, currentNote, setCurrentNoteId, createNewNote, deleteNote }) => {
    const notesElements = notes.map((note) => {
        return (
            <div key={note.id} className={`note ${note.id === currentNote.id && "selected"}`} onClick={() => setCurrentNoteId(note.id)}>
                Note {note.entry}
                <button className="btn btn-close" onClick={(event) => deleteNote(event, note.id)}>
                    &times;
                </button>
            </div>
        );
    });

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Notes</h1>
                <button className="btn btn-box" onClick={createNewNote}>
                    +
                </button>
            </div>
            {notesElements}
        </div>
    );
};

export default Sidebar;
