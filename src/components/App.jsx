import React, { useState } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import Grid from '@mui/material/Grid';

function App() {
    // const to store notes.
    const [notes, setNotes] = useState([]);
    
    // pass a function to get the note from CreateArea
    function addNote(newNote) {
        // console.log(newNote);
        
        // store the new note in notes array.
        setNotes(prevNotes => {
            return [
                ...prevNotes,
                newNote
            ];
        })
    }

    // pass a function to get the id of the note to delete
    function deleteNote(id) {
        // console.log("Delete was triggered for the id: " + id);

        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <div className='content'>
                <Heading />
                <CreateArea onAdd={addNote} />
                <Grid container spacing={2}>
                    {notes.map((note, index) => (
                        <Note 
                            key={index} 
                            id={index} 
                            title={note.title} 
                            content={note.content} 
                            onDelete={deleteNote}
                        />
                    ))}
                </Grid>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;