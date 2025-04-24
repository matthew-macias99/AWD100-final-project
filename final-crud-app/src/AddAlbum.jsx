import React, {useState} from 'react';
import { nanoid } from 'nanoid';






function AddAlbum(props){
    // id, albumName, artistName, genre, releaseDate, albumCover
    const[albumName, setAlbumName] = useState("");
    const[artistName, setArtistName] = useState("");
    const[genre, setGenre] = useState("");
    const[releaseDate, setReleaseDate] = useState("");
    const[selectedFile, setSelectedFile] = useState(null);


    const doWork = () => {
        const newAlbum = {"id":nanoid(), "albumName":albumName, "artistName":artistName, "genre":genre, "releaseDate":releaseDate, "albumCover":URL.createObjectURL(selectedFile)};
        props.addAlbum(newAlbum);


        setAlbumName("");
        setArtistName("");
        setGenre("");
        setReleaseDate("");
        setSelectedFile(null);


        document.getElementById('fileUpload').value = "";
    }


    const imageUpdate = (event) =>{
        setSelectedFile(event.target.files[0]);
    }




    return(
        <div className='row mt-4'>
            <div className='col-lg-4'>{/* album name */}
                <label htmlFor='txtAlbumName' className='form-label'>Album Title:</label>
                <input type='text' id='txtAlbumName' placeholder='Album Title' className='form-control' onChange={(evt) => setAlbumName(evt.currentTarget.value)} value={albumName}/>
            </div>
            <div className='col-lg-4'>{/* artist name */}
                <label htmlFor='txtArtistName' className='form-label'>Artist Name:</label>
                <input type='text' id='txtArtistName' placeholder='Artist Name' className='form-control' onChange={(evt) => setArtistName(evt.currentTarget.value)} value={artistName}/>
            </div>
            <div className='col-lg-4'>{/* genre */}
                <label htmlFor='txtGenre' className='form-label'>Genre:</label>
                <input type='text' id='txtGenre' placeholder='Genre' className='form-control' onChange={(evt) => setGenre(evt.currentTarget.value)} value={genre}/>
            </div>
            <div className='col-lg-4'>{/* release date */}
                <label htmlFor='txtReleaseDate' className='form-label'>Release Date:</label>
                <input type='text' id='txtReleaseDate' placeholder='Release Date' className='form-control' onChange={(evt) => setReleaseDate(evt.currentTarget.value)} value={releaseDate}/>
            </div>
            <div className='col-lg-4'> {/* album cover */}
                <label htmlFor='fileUpload' className='form-label'>Album Cover</label>
                <input type='file' name='file' id='fileUpload' onChange={imageUpdate}/>
            </div>
            <div className='col-lg-4 mt-4'>{/* submit button */}
                <button type='button' id='btnAdd' className='btn btn-success btn-md' onClick={doWork}>Add Album </button>
            </div>
        </div>
    );


}


export default AddAlbum;