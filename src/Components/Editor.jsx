import React, { useState } from "react";

const Editor = ({ currentNote, updateNote }) => {
    return (
        <div className="editor">
            <div className="editor-header">
                <h1>Editor</h1>
            </div>
            <textarea className="editor-area" value={currentNote.text} onChange={(event) => updateNote(event.target.value)} />
        </div>
    );
};

export default Editor;
