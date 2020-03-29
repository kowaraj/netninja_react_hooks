import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import AddSongForm from './AddSongForm';

const SongList = () => {
    const [songs, setSongs] = useState( [
        {title: "song one", id: uuid()},
        {title: "song two", id: uuid()},
        {title: "song three", id: uuid()},
    ]);
    const addSong = (title) => {
        setSongs(
            [...songs, {title, id: uuid()} ]
        );
    };
    useEffect(() => {
        console.log("(Re-)rendering SongList component", songs )
    }, [songs]);
    const [age, setAge] = useState(20);

    return (  
        <div className='song-list'>
            <ul>{
                songs.map( song => { 
                    return ( <li key={song.id}> {song.title} </li>)
                })
            }</ul>
            <AddSongForm addSongHandler={addSong}/>
            <button onClick={(e)=> setAge(age+1) }>Age +1, {age}</button>
        </div>
    );
}
 
export default SongList;
