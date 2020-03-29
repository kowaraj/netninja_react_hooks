import React, { useState } from 'react'

const AddSongForm = ({ addSongHandler }) => {
    const [title, setTitle ] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addSongHandler(title);
        setTitle('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label> Song title: </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required />
            <input type="submit" value="Add song" />
        </form>
     );
}
 
export default AddSongForm;
