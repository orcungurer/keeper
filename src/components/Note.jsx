import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

function Note(props) {
    // props has onDelete function and id that App component passed.

    function handleClick() {
        // passing id back to the App component when deleting
        props.onDelete(props.id);
    }

    return (
        <Grid item sm={6} md={4} lg={3} xl={2}>
            <div className='note'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={handleClick}><DeleteIcon /></button>
            </div>
        </Grid>
    );
}

export default Note;