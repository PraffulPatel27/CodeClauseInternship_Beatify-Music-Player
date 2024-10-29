import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

import assets from '../assets/assets.js';

const Dashboard = ({ 
  playlists, 
  likedSongs, 
  recentSongs, 
  mostPlayedSongs, 
  customPlaylists, 
  createPlaylist, 
  deleteSongFromPlaylist 
}) => {
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('home'); // Track the selected feature

  const handleCreatePlaylist = () => {
    if (newPlaylistName) {
      createPlaylist(newPlaylistName);
      setNewPlaylistName('');
    }
  };

  // const initialSongs = [
  //   { name: 'Aaj Ki Party', artist: 'Artist One', url: '/songs/Aaj_Ki_Party.mp3', playCount: 0 },
  //   { name: 'Akh Lad Jaave', artist: 'Artist Two', url: '/songs/Akh_Lad_Jaave.mp3', playCount: 0 },
  //   { name: 'Alan Walker Faded', artist: 'Artist Three', url: '/songs/Alan_Walker_Faded.mp3', playCount: 0 },
  //   { name: 'Allah Duhai', artist: 'Artist Four', url: '/songs/Allah_Duhai.mp3', playCount: 0 },
  //   { name: 'Amplifier', artist: 'Artist Five', url: '/songs/Amplifier.mp3', playCount: 0 },
  //   { name: 'Apsara Aali', artist: 'Artist Six', url: '/songs/Apsara_Aali.mp3', playCount: 0 },
  //   { name: 'Billo Star', artist: 'Artist Seven', url: '/songs/BILLO_STAR.mp3', playCount: 0 },
  //   { name: 'Blue Eyes', artist: 'Artist Eight', url: '/songs/Blue_Eyes.mp3', playCount: 0 },
  // ];

  // const [playlist, setPlaylist] = useState(initialSongs);

  // const handleSongSearch = (songs) => {
  //   setFilteredSongs(songs);
  // };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white px-10 pb-10 pt-2.5">
        <div className="mb-8">
          <span className="text-3xl font-bold bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF] bg-clip-text text-transparent">
            Beatify
          </span>

          {/*** line ***/}
          <div className="w-full h-1 bg-gray-700 my-4">
          </div>
        </div>

        <nav>
          <ul className="space-y-6">
          {/*** Menu ***/}
            <li className='cursor-pointer'>
              <div className="flex items-center gap-x-2">
                <img src={assets.homeIcon} alt="Home" className="w-4 h-4"/>

                <button 
                  className={`w-full text-left ${selectedFeature === 'home' ? 'text-white' : ''}`}
                  onClick={() => setSelectedFeature('home')}
                >
                 Home
                </button>
              </div>
            </li>


            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.albums} alt="Home" className="w-4 h-4"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'home' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('home')}
                >
                Albums
              </button>
              </div>
            </li>

          {/*** Upload Songs ***/}
            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.upload} alt="Home" className="w-4 h-4"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'home' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('home')}
              >
                Upload Song
              </button>
              </div>  
            </li>

          {/*** Library ***/}
            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.recentlyPlayed} alt="Home" className="w-4 h-4"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'recent' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('recent')}
              >
                Recently Played
              </button>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.mostPlayed} alt="Home" className="w-4 h-4"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'recent' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('recent')}
              >
                Most played
              </button>
              </div>
            </li>

          {/*** Playlist and favourite ***/}

            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.yourFavorite} alt="Home" className="w-4 h-4"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'liked' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('liked')}
              >
                Your favorites
              </button>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.yourPlaylist} alt="Home" className="w-4 h-4"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'playlists' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('playlists')}
              >
                Your playlist
              </button>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.addPlaylist} alt="Home" className="w-4 h-4 text-white"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'playlists' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('playlists')}
              >
                Add playlist
              </button>
              </div>
            </li>

          {/*** General ***/}
            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.setting} alt="Home" className="w-4 h-4 text-white"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'playlists' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('playlists')}
              >
                Setting
              </button>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-2">
                <img src={assets.logout} alt="Home" className="w-4 h-4 text-white"/>

                <button 
                className={`w-full text-left ${selectedFeature === 'playlists' ? 'text-white' : ''}`}
                onClick={() => setSelectedFeature('playlists')}
              >
                Logout
              </button>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <Header />
        
        {selectedFeature === 'home' && (
          <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
            {/* Search Bar */}
            <SearchBar playlist={playlist} onSongSearch={handleSongSearch} />


            <h2 className="text-2xl mb-4">Home</h2>
            {/* Add Home content */}
            <div>Recommended songs, top charts, etc.</div>
          </div>
        )}

        {selectedFeature === 'upload' && (
          <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Upload Song</h2>
            {/* Add Upload content */}
            <div>Upload your songs here</div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UploadSongs setPlaylist={setPlaylist} />
                  <SongList 
                    playlist={filteredSongs.length > 0 ? filteredSongs : playlist} 
                    setCurrentSong={playSong}
                    addToLiked={addToLiked}
                  />
                </div>
          </div>
        )

        {selectedFeature === 'liked' && (
          <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Liked Songs</h2>
            {likedSongs.length > 0 ? (
              <button className="bg-green-600 p-2 rounded">Play Liked Playlist</button>
            ) : (
              <p>No liked songs yet.</p>
            )}
          </div>
        )}

        {selectedFeature === 'playlists' && (
          <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Playlists</h2>
            <div className="mb-6">
              <h3 className="text-lg mb-2">Create a Playlist</h3>
              <input 
                type="text"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                className="p-2 rounded bg-gray-700 text-white mb-2"
                placeholder="Enter playlist name"
              />
              <button onClick={handleCreatePlaylist} className="bg-blue-600 p-2 rounded">Create Playlist</button>

              <div className="mt-4 mb-6">
                <h3 className="text-lg mb-2">Your Playlists</h3>
                {customPlaylists.map((playlist, index) => (
                  <div key={index} className="p-2 bg-gray-700 rounded mb-2">
                    <h4 className="text-md">{playlist.name}</h4>
                    <button className="bg-blue-600 p-2 mt-2 rounded">Play Playlist</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedFeature === 'recent' && (
          <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Recently Played</h2>
            {recentSongs.length > 0 ? recentSongs.map((song, index) => (
              <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                <span>{song.name}</span>
                <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
              </div>
            )) : <p>No recent songs.</p>}
          </div>
        )}

        {/* Add content for additional features as needed */}
      </main>
    </div>
  );
};

export default Dashboard;

