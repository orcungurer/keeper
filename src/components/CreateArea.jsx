import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Grid from '@mui/material/Grid';

function CreateArea(props) {
    // props has onAdd function that App component passed.

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        
        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        // we pass the current created note back to App
        props.onAdd(note);
        setNote({title: "", content: ""})
        event.preventDefault();
    }

    return (
        <Grid container spacing={2}>
            <form className="create-note">
                <input 
                    name='title' 
                    value={note.title} 
                    onChange={handleChange}
                    placeholder='Title'
                    maxlength="20"
                ></input>

                <textarea 
                    name='content' 
                    value={note.content} 
                    onChange={handleChange}
                    placeholder='Take a note...' 
                    rows='3'
                    maxlength="140"
                ></textarea>

                <Zoom in={true}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </Grid>
    );
}

export default CreateArea;