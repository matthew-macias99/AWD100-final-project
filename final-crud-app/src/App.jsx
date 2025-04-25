import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import React, {useState, useEffect} from 'react';
import AddAlbum from './components/AddAlbum';
import _ from 'lodash';
import Albums from './components/albums';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


function App() {


  const [allAlbums, setAllAlbums] = useState(null);
  const[searchResults, setSearchResults] = useState(null);
  const[keywords, setKeywords] = useState("");
  const[genre, setGenre] = useState("");

  useEffect(() => {
    saveAlbums(albums);
  }, []);

  const saveAlbums = (albums) => {
    setAllAlbums(albums);
    setSearchResults(albums);
  }

  const addAlbum = (newAlbum) => {
    const updatedAlbums = [...allAlbums, newAlbum];
    saveAlbums(updatedAlbums);
  }

  
  const searchAlbums = () => {
      let keywordsArray = [];

      if(keywords){
        keywordsArray = keywords.toLowerCase().split(' ');
      }

      if(genre){
        keywordsArray.push(genre);
      }

      if(keywordsArray.length > 0){
        const searchResults = allAlbums.filter(album => {
          for(const word of keywordsArray){
            if(album.albumName.toLowerCase().includes(word) || album.artistName.toLowerCase().includes(word) || album.genre === word){
              return true;
            }
          }
          return false;
        });
        setSearchResults(searchResults);
      } else{
        setSearchResults(allAlbums);
      }
  }

  const removeAlbum = (albumToDelete) => {
    const updatedAlbumsArray = allAlbums.filter(album => album.id !== albumToDelete.id);
    saveAlbums(updatedAlbumsArray);
  }

  const editAlbum = (updatedAlbum) => {
    const editedAlbumsArray = allAlbums.map(album => album.id === updatedAlbum.id ? {...album, ...updatedAlbum} : album);
    saveAlbums(editedAlbumsArray);
  }


  const albums = [{
    id: nanoid(),
    albumName: "To Pimp a Butterfly",
    artistName: "Kendrick Lamar",
    genre: "Hip-Hop",
    albumCover: 'images/butterfly.jpg',
    releaseDate: "March 15th 2015"
  }, {
    id: nanoid(),
    albumName: "DAMN.",
    artistName: "Kendrick Lamar",
    genre: "Hip-Hop",
    albumCover: 'images/damn.jpg',
    releaseDate: "April 14th 2017"
  }, {
    id: nanoid(),
    albumName: "Stankonia",
    artistName: "OutKast",
    genre: "Hip-Hop",
    albumCover: 'images/stankonia.jpg',
    releaseDate: "October 31st 2000"
  }, {
    id: nanoid(),
    albumName: "Madvillainy",
    artistName: "Madvillain, MF DOOM & Madlib",
    genre: "Hip-Hop",
    albumCover: 'images/madvillain.jpg',
    releaseDate: "March 23rd 2004"
  }, {
    id: nanoid(),
    albumName: "The Miseducation of Lauryn Hill",
    artistName: "Lauryn Hill",
    genre: "Hip-Hop/RnB",
    albumCover: "images/mideducation.png",
    releaseDate: "August 19th 1998"
  }, {
    id: nanoid(),
    albumName: "Abbey Road",
    artistName: "The Beatles",
    genre: "Rock n Roll",
    albumCover: 'images/abbey-road.jpg',
    releaseDate: "September 26th 1969"
  }, {
    id: nanoid(),
    albumName: "Back in Black",
    artistName: "AC/DC",
    genre: "Heavy Metal",
    albumCover: 'images/back-in-black.png',
    releaseDate: "July 25th 1980"
  }, {
    id: nanoid(),
    albumName: "The Dark Side of the Moon",
    artistName: "Pink Floyd",
    genre: "Progressive Rock",
    albumCover: 'images/darkside.jpg',
    releaseDate: "March 1st 1973"
  }, {
    id: nanoid(),
    albumName: "Discovery",
    artistName: "Daft Punk",
    genre: "French House",
    albumCover: 'images/discovery.jpg',
    releaseDate: "March 12th 2001"
  }, {
    id: nanoid(),
    albumName: "Hounds of Love",
    artistName: "Kate Bush",
    genre: "New Wave",
    albumCover: 'images/hounds-of-love.jpg',
    releaseDate: "September 16th 1985"
  }, {
    id: nanoid(),
    albumName: "In the Court of the Crimson King",
    artistName: "King Crimson",
    genre: "Progressive Rock",
    albumCover: 'images/king-crimson.jpg',
    releaseDate: "October 10th 1969"
  }, {
    id: nanoid(),
    albumName: "OK Computer",
    artistName: "Radiohead",
    genre: "Alternative Rock",
    albumCover: 'images/radiohead.jpg',
    releaseDate: "May 21st 1997"
  }, {
    id: nanoid(),
    albumName: "Songs in the Key of Life",
    artistName: "Stevie Wonder",
    genre: "Soul",
    albumCover: 'images/stevie.jpg',
    releaseDate: "September 28th 1976"
  }, {
    id: nanoid(),
    albumName: "The Fame",
    artistName: "Lady Gaga",
    genre: "Pop",
    albumCover: 'images/the-fame.png',
    releaseDate: "August 19th 2008"
  }, {
    id: nanoid(),
    albumName: "Thriller",
    artistName: "Michael Jackson",
    genre: "Pop",
    albumCover: 'images/thriller.jpg',
    releaseDate: "November 30th 1982"
  }];


  return (
    <div className='container'>
      <h1 className='mt-4 text-center'>Welcome to Your Library!</h1>
      <div className='row mt-4'>
        {searchResults && searchResults.map((album) =>
        (<div className='col-lg-2 mt-4' key={album.id}>
          <Albums album={album} removeAlbum={removeAlbum} updatedAlbum={editAlbum}/>
        </div>)
        )}
      </div>

      {/* add album */}
      <h1 className='mt-4 text-center'>Add an Album</h1>
      <div id='addAlbum' className='mt-4 mb-4'> 
        <AddAlbum addAlbum={addAlbum} /> 
      </div>

      {/* search functionality */}  
      <div className='row mt-4'> 
      <h1 className='mt-4  mb-4 text-center'>Search</h1>
          <div className='col-lg-3 mb-4'>
            <label htmlFor='txtKeywords'>Search by Album Title, or Artist Name</label>
            <input type='text' className='form-control' placeholder='Search Here' onChange={evt => setKeywords(evt.currentTarget.value)} value={keywords}/>
          </div>
          <div className='col-lg-3 mb-4'>
            <select value={genre} onChange={evt => setGenre(evt.currentTarget.value)} className='form-select'>
              <option value="">Select Genre</option>
              {_(allAlbums).map(album => album.genre).sort().uniq().map(genre => <option key={genre} value={genre}>{genre}</option>).value()}
            </select>
          </div>
          <div className='col-lg-3 mb-4'>
            <button type='button' className='btn btn-primary' onClick={searchAlbums}>Search <FontAwesomeIcon icon={faSearch}/></button>
          </div>
        </div>
    </div>
  );
}


export default App