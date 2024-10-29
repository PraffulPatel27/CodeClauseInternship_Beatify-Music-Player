// import React, { useState } from 'react';
// import Header from './Header';
// import SearchBar from './SearchBar';
// import SongList from './SongList';
// import Playlist from './Playlist';
// import LikedPlaylist from './LikedPlaylist';
// // import CustomPlaylist from './CustomPlaylist';
// import Hero from './Hero';
// import Footer from './Footer';
// import UploadSongs from './UploadSongs';

// import assets from '../assets/assets.js';

// const Dashboard = ({ 
//   playlists, 
//   likedSongs, 
//   recentSongs, 
//   mostPlayedSongs, 
//   customPlaylists, 
//   createPlaylist, 
//   deleteSongFromPlaylist 
// }) => {
//   const [newPlaylistName, setNewPlaylistName] = useState('');
//   const [selectedFeature, setSelectedFeature] = useState('home'); 

//   const handleCreatePlaylist = () => {
//     if (newPlaylistName) {
//       createPlaylist(newPlaylistName);
//       setNewPlaylistName('');
//     }
//   };

//   const initialSongs = [
//     { name: 'Aaj Ki Party', artist: 'Artist One', url: '/songs/Aaj_Ki_Party.mp3', playCount: 0 },
//     { name: 'Akh Lad Jaave', artist: 'Artist Two', url: '/songs/Akh_Lad_Jaave.mp3', playCount: 0 },
//     { name: 'Alan Walker Faded', artist: 'Artist Three', url: '/songs/Alan_Walker_Faded.mp3', playCount: 0 },
//     { name: 'Allah Duhai', artist: 'Artist Four', url: '/songs/Allah_Duhai.mp3', playCount: 0 },
//     { name: 'Amplifier', artist: 'Artist Five', url: '/songs/Amplifier.mp3', playCount: 0 },
//     { name: 'Apsara Aali', artist: 'Artist Six', url: '/songs/Apsara_Aali.mp3', playCount: 0 },
//     { name: 'Billo Star', artist: 'Artist Seven', url: '/songs/BILLO_STAR.mp3', playCount: 0 },
//     { name: 'Blue Eyes', artist: 'Artist Eight', url: '/songs/Blue_Eyes.mp3', playCount: 0 },
//   ];

//   const [playlist, setPlaylist] = useState(initialSongs);

//   const handleSongSearch = (songs) => {
//     setFilteredSongs(songs);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white px-10 pb-10 pt-2.5">
//         <div className="mb-8">
//           <span className="text-3xl font-bold bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF] bg-clip-text text-transparent">
//             Beatify
//           </span>

//           {/*** line ***/}
//           <div className="w-full h-1 bg-gray-700 my-4">
//           </div>
//         </div>

//         <nav>
//           <ul className="space-y-6">
//           {/*** Menu ***/}
//             <li className='cursor-pointer'>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.homeIcon} alt="Home" className="w-4 h-4"/>

//                 <button 
//                   className={`w-full text-left ${selectedFeature === 'home' ? 'text-white' : ''}`}
//                   onClick={() => setSelectedFeature('home')}
//                 >
//                  Home
//                 </button>
//               </div>
//             </li>


//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.albums} alt="Home" className="w-4 h-4"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'albums' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('home')}
//                 >
//                 Albums
//               </button>
//               </div>
//             </li>

//           {/*** Upload Songs ***/}
//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.upload} alt="Home" className="w-4 h-4"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'upload' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('upload')}
//               >
//                 Upload Song
//               </button>
//               </div>  
//             </li>

//           {/*** Library ***/}
//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.recentlyPlayed} alt="Home" className="w-4 h-4"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'recentPlayed' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('recent')}
//               >
//                 Recently Played
//               </button>
//               </div>
//             </li>

//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.mostPlayed} alt="Home" className="w-4 h-4"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'mostPlayed' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('recent')}
//               >
//                 Most played
//               </button>
//               </div>
//             </li>

//           {/*** Playlist and favourite ***/}

//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.yourFavorite} alt="Home" className="w-4 h-4"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'liked' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('liked')}
//               >
//                 Your favorites
//               </button>
//               </div>
//             </li>

//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.yourPlaylist} alt="Home" className="w-4 h-4"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'playlists' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('playlists')}
//               >
//                 Your playlist
//               </button>
//               </div>
//             </li>

//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.addPlaylist} alt="Home" className="w-4 h-4 text-white"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'addPlaylists' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('playlists')}
//               >
//                 Add playlist
//               </button>
//               </div>
//             </li>

//           {/*** General ***/}
//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.setting} alt="Home" className="w-4 h-4 text-white"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'setting' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('playlists')}
//               >
//                 Setting
//               </button>
//               </div>
//             </li>

//             <li>
//               <div className="flex items-center gap-x-2">
//                 <img src={assets.logout} alt="Home" className="w-4 h-4 text-white"/>

//                 <button 
//                 className={`w-full text-left ${selectedFeature === 'logout' ? 'text-white' : ''}`}
//                 onClick={() => setSelectedFeature('playlists')}
//               >
//                 Logout
//               </button>
//               </div>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-4 bg-gray-100">
//         <Header />
        
//         {selectedFeature === 'home' && (
//           <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//             {/* Search Bar */}
//             <SearchBar playlist={playlist} onSongSearch={handleSongSearch} />


//             <h2 className="text-2xl mb-4">Home</h2>
//             {/* Add Home content */}
//             <div>Recommended songs, top charts, etc.</div>

//             {/* Music Player */}
//                 {/* {playlist.length > 0 && (
//                   <MusicPlayer
//                     playlist={playlist}
//                     currentSong={currentSong}
//                     setCurrentSong={setCurrentSong}
//                   />
//                 )} */}
//           </div>

          
//         )}

//         {selectedFeature === 'upload' && (
//           <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//             <h2 className="text-2xl mb-4">Upload Song</h2>
//             {/* Add Upload content */}
//             <div>Upload a song to your library.</div>
//           </div>

//         )}

//         {selectedFeature === 'liked' && (
//           <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//             <h2 className="text-2xl mb-4">Liked Songs</h2>
//             {likedSongs.length > 0 ? (
//               <button className="bg-green-600 p-2 rounded">Play Liked Playlist</button>
//             ) : (
//               <p>No liked songs yet.</p>
//             )}
//           </div>
//         )}

//         {selectedFeature === 'playlists' && (
//           <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//             <h2 className="text-2xl mb-4">Playlists</h2>
//             <div className="mb-6">
//               <h3 className="text-lg mb-2">Create a Playlist</h3>
//               <input 
//                 type="text"
//                 value={newPlaylistName}
//                 onChange={(e) => setNewPlaylistName(e.target.value)}
//                 className="p-2 rounded bg-gray-700 text-white mb-2"
//                 placeholder="Enter playlist name"
//               />
//               <button onClick={handleCreatePlaylist} className="bg-blue-600 p-2 rounded">Create Playlist</button>

//               <div className="mt-4 mb-6">
//                 <h3 className="text-lg mb-2">Your Playlists</h3>
//                 {customPlaylists.map((playlist, index) => (
//                   <div key={index} className="p-2 bg-gray-700 rounded mb-2">
//                     <h4 className="text-md">{playlist.name}</h4>
//                     <button className="bg-blue-600 p-2 mt-2 rounded">Play Playlist</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {selectedFeature === 'recent' && (
//           <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//             <h2 className="text-2xl mb-4">Recently Played</h2>
//             {recentSongs.length > 0 ? recentSongs.map((song, index) => (
//               <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
//                 <span>{song.name}</span>
//                 <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
//               </div>
//             )) : <p>No recent songs.</p>}
//           </div>
//         )}

//         {/* Add content for additional features as needed */}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import dashboardHeader from './dashboardheader';
import assets from '../../assets/assets';

// const assets = {
//   homeIcon: '/path/to/home-icon.svg',
//   upload: '/path/to/upload-icon.svg',
//   recentlyPlayed: '/path/to/recent-icon.svg',
//   mostPlayed: '/path/to/most-played-icon.svg',
//   yourFavorite: '/path/to/favorite-icon.svg',
//   yourPlaylist: '/path/to/playlist-icon.svg',
//   addPlaylist: '/path/to/add-playlist-icon.svg',
//   setting: '/path/to/settings-icon.svg',
//   logout: '/path/to/logout-icon.svg'
// };

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
  const [selectedFeature, setSelectedFeature] = useState('home');
  const [uploadFile, setUploadFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreatePlaylist = () => {
    if (newPlaylistName) {
      createPlaylist(newPlaylistName);
      setNewPlaylistName('');
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setUploadFile(file);
    // Implement upload logic here
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#181818] text-white p-6 fixed h-full overflow-y-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="text-3xl font-bold bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF] bg-clip-text text-transparent">
            Beatify
          </span>

        {/*** line ***/}
          <div className="w-full h-1 bg-gray-700 my-4">
          </div>
        </div>

        <nav>
          <ul className="space-y-4">
            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'home' ? 'bg-gray-800 text-green-500' : ''
                }`}
                onClick={() => setSelectedFeature('home')}
              >
                <i className="fas fa-home mr-2"></i>
                Home
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'upload' ? 'bg-gray-800 text-green-500' : ''
                }`}
                onClick={() => setSelectedFeature('upload')}
              >
                <i className="fas fa-upload mr-2"></i>
                Upload Song
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'recent' ? 'bg-gray-800 text-green-500' : ''
                }`}
                onClick={() => setSelectedFeature('recent')}
              >
                <i className="fas fa-history mr-2"></i>
                Recently Played
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'mostPlayed' ? 'bg-gray-800 text-green-500' : ''
                }`}
                onClick={() => setSelectedFeature('mostPlayed')}
              >
                <i className="fas fa-chart-line mr-2"></i>
                Most Played
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'favorites' ? 'bg-gray-800 text-green-500' : ''
                }`}
                onClick={() => setSelectedFeature('favorites')}
              >
                <i className="fas fa-heart mr-2"></i>
                Your Favorites
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'playlists' ? 'bg-gray-800 text-green-500' : ''
                }`}
                onClick={() => setSelectedFeature('playlists')}
              >
                <i className="fas fa-list mr-2"></i>
                Your Playlists
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'addPlaylist' ? 'bg-gray-800 text-green-500' : ''
                }`}
                onClick={() => setSelectedFeature('addPlaylist')}
              >
                <i className="fas fa-plus mr-2"></i>
                Add Playlist
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'settings' ? 'bg-gray-800 text-green-500' : ''
                }`}
                onClick={() => setSelectedFeature('settings')}
              >
                <i className="fas fa-cog mr-2"></i>
                Settings
              </button>
            </li>

            <li className="mb-3">
              <button
                className="w-full text-left flex items-center p-2 rounded hover:bg-gray-800 text-red-500"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 bg-gray-200">
      {/* Header Section */}
      <div className='w-full h-20 p-4 bg-[#181818]'>
        {/* <header className="grid grid-cols-2 items-center gap-x-10"> */}
        <header className="flex items-center justify-between gap-x-14">
          {/** Search Bar **/}
          <div className="w-full relative flex items-center">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg  
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />  
                </svg>
            </div>

           <input
            type="text"
            // value={query}
            // onChange={handleSearch}
            placeholder="Search for a song..."
            // className="w-full p-2 rounded-xl bg-white text-gray-300 border-2 border-[#ACACAC]"
            className="w-full px-10
             py-2 rounded-xl bg-white text-gray-300 border-2 border-[#ACACAC]"
           />
          </div>

          {/** User Profile **/}
          {/* <div className=' grid grid-cols-2 items-center justify-end gap-x-4'> */}
          <div className="w-52 flex justify-end gap-x-6">
            <button className="px-4 py-2 text-center text-sm text-white rounded-3xl bg-gradient-to-r from-green-400 to-blue-500">
              Premuim
            </button>

            <div>
              <img src={assets.userProfile} 
                alt="User Profile" 
                className="w-10 h-10 rounded-full border-2 border-[#8568F5]" 
                />
            </div>
          </div>
        </header>
      </div>

        
        <div className="p-6 text-slate-900 overflow-y-auto">
          {/* Home Section */}
          {selectedFeature === 'home' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Recommended
              </h2>

              <div className='grid grid-cols-4 gap-4'>
                <div className="w bg-white text-start rounded-lg shadow mx-0">
                  <img src={assets.album1} 
                      alt="Album 1" 
                    className="w-full h-48 rounded-lg mb-6" 
                  />

                  <h3 className="text-xl font-semibold">
                    Jiwa yan gersedih
                  </h3>
                  <p className="text-gray-500"> 
                    Ghea Indrawati </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <img src={assets.album1} 
                      alt="Album 1" 
                    className="w-full h-48  rounded-lg mb-4" 
                    />

                  <h3 className="text-xl font-semibold mb-4">Featured Playlists</h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <img src={assets.album1} 
                      alt="Album 1" 
                    className="w-full h-48  rounded-lg mb-4" 
                    />

                  <h3 className="text-xl font-semibold mb-4">Featured Playlists</h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <img src={assets.album1} 
                      alt="Album 1" 
                    className="w-full h-48  rounded-lg mb-4" 
                    />

                  <h3 className="text-xl font-semibold mb-4">Featured Playlists</h3>
                </div>
              </div>
            </div>
          )}



          {/* Upload Section */}
          {selectedFeature === 'upload' && (
            <div>
              <h2 className="text-2xl font-bold mb- 6">Upload Song</h2>
              <input
                type="file"
                accept="audio/*"
                onChange={handleUpload}
                className="mb-4"
              />
              {uploadFile && (
                <button className="bg-blue-600 p-2 rounded">
                  Upload {uploadFile.name}
                </button>
              )}
            </div>
          )}

          {/* Recently Played Section */}
          {selectedFeature === 'recent' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
              {recentSongs.map((song, index) => (
                <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                  <span>{song.name}</span>
                  <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
                </div>
              ))}
            </div>
          )}

          {/* Most Played Section */}
          {selectedFeature === 'mostPlayed' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Most Played</h2>
              {mostPlayedSongs.map((song, index) => (
                <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                  <span>{song.name}</span>
                  <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
                </div>
              ))}
            </div>
          )}

          {/* Favorites Section */}
          {selectedFeature === 'favorites' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Favorites</h2>
              {likedSongs.map((song, index) => (
                <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                  <span>{song.name}</span>
                  <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
                </div>
              ))}
            </div>
          )}

          {/* Playlists Section */}
          {selectedFeature === 'playlists' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Playlists</h2>
              {playlists.map((playlist, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
                  <h3 className="text-xl font-semibold mb-4">{playlist.name}</h3>
                  {playlist.songs.map((song, index) => (
                    <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                      <span>{song.name}</span>
                      <button
                        className="text-sm bg-red-600 p-1 rounded"
                        onClick={() => deleteSongFromPlaylist(song, playlist.name)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Add Playlist Section */}
          {selectedFeature === 'addPlaylist' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Add Playlist</h2>
              <input
                type="text"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                placeholder="Enter playlist name"
                className="w-full p-2 rounded-lg mb-4"
              />
              <button
                className="bg-blue-600 p-2 rounded text-white"
                onClick={handleCreatePlaylist}
              >
                Create Play list
              </button>
            </div>
          )}

          {/* Settings Section */}
          {selectedFeature === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Settings</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                  {/* Add account settings content */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Audio Settings</h3>
                  {/* Add audio settings content */}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;