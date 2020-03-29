import React, { useState } from 'react';
import uuid from 'uuid/v1';
import AddSongForm from './AddSongForm';

const SongList = () => {
    const [songs, setSongs] = useState( [
        {title: "song one", id: uuid()},
        {title: "song two", id: uuid()},
        {title: "song three", id: uuid()},
    ]);
    const addSong = () => {
        setSongs(
            [...songs, {title: "New song", id: uuid()} ]
        );
    };
    return (  
        <div className='song-list'>
            <ul>{
                songs.map( song => { 
                    return ( <li key={song.id}> {song.title} </li>)
                })
            }</ul>
            <AddSongForm />
        </div>
    );
}
 
export default SongList;
