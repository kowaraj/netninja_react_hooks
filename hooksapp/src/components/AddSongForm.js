import React, { useState } from 'react'

const AddSongForm = () => {
    const [title, setTitle ] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);  
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
