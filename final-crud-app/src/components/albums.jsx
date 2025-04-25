import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWarning, faMagicWandSparkles} from '@fortawesome/free-solid-svg-icons';

function Albums(props){

    const[editMode, setEditMode] = useState(false);
    const[albumName, setAlbumName] = useState("");
    const[artistName, setArtistName] = useState("");
    const[genre, setGenre] = useState("");
    const[releaseDate, setReleaseDate] = useState("");


    useEffect(() => {
        setAlbumName(props.album.albumName);
        setArtistName(props.album.artistName);
        setGenre(props.album.genre);
        setReleaseDate(props.album.releaseDate);
    }, []);

    const saveAlbum = () => {
        setEditMode(false);
        const updatedAlbum = {albumName:albumName, artistName:artistName, genre:genre, releaseDate:releaseDate, id:props.album.id, albumCover:props.album.albumCover};
        props.updatedAlbum(updatedAlbum);
    }

    return(
        <div className='card'>
            <img src={props.album.albumCover} alt='album cover' />
            {!editMode && <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{props.album.albumName}</li>
                <li className='list-group-item'>By {props.album.artistName}</li>
                <li className='list-group-item'>Genre: {props.album.genre}</li>
                <li className='list-group-item'>Release Date: {props.album.releaseDate}</li>
                <button type="button" className="btn btn-danger" onClick={() => props.removeAlbum(props.album)}>Remove Album <FontAwesomeIcon icon={faWarning}/> </button>
                <button type='button' className='btn btn-warning' onClick={() => setEditMode(true)}>Edit <FontAwesomeIcon icon={faMagicWandSparkles}/></button>
            </ul>
            }
            {editMode &&
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><input type='text' className='form-control' value={albumName} onChange={(evt) => setAlbumName(evt.currentTarget.value)}/></li>
                    <li className='list-group-item'><input type='text' className='form-control' value={artistName} onChange={(evt) => setArtistName(evt.currentTarget.value)}/></li>
                    <li className='list-group-item'><input type='text' className='form-control' value={genre} onChange={(evt) => setGenre(evt.currentTarget.value)}/></li>
                    <li className='list-group-item'><input type='text' className='form-control' value={releaseDate} onChange={(evt) => setReleaseDate(evt.currentTarget.value)}/></li>
                    <li className='list-group-item'><button id='btnSave' className='btn btn-secondary' onClick={saveAlbum}>Save</button></li>
                </ul>
            }
        </div>
    )
};

export default Albums;