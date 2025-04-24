import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import React, {useState} from 'react';
import AddAlbum from './AddAlbum';


function App() {


  const [allAlbums, setAllAlbums] = useState(null);


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


  const addAlbum = (newAlbum) => {
    const updatedAlbums = [...allAlbums, newAlbum];
    setAllAlbums(updatedAlbums);
  }


  return (
    <div className='container'>
      <h1 className='mt-4 text-center'>Welcome to Your Library!</h1>
      <div className='row mt-4'>
        {allAlbums && allAlbums.map((album) =>
        (<div className='col-lg-2 mt-4' key={album.id}>
          <div className='card'>
            <img src={album.albumCover} alt='album cover' />
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>{album.albumName}</li>
              <li className='list-group-item'>By {album.artistName}</li>
              <li className='list-group-item'>Genre: {album.genre}</li>
              <li className='list-group-item'>Release Date: {album.releaseDate}</li>
            </ul>
          </div>
        </div>)
        )}
      </div>
      {!allAlbums && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllAlbums(albums)}>Save Albums</button>}
      <div id='addAlbum' className='mt-4 mb-4'>
        <AddAlbum addAlbum={addAlbum} />
      </div>
    </div>
  );
}


export default App