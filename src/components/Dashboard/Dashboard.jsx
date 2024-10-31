// import React, { useState } from 'react';
// import dashboardHeader from './dashboardheader';
// import assets from '../../assets/assets';
// import MusicPlayer from '../MusicPlayer';

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
//   const [uploadFile, setUploadFile] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const tracks = [
//     { src: '../../../public/songs/Amplifier.mp3', title: 'Amplifier', artist: 'Imran Khan' },
//     { src: '../../../public/songs/Blue_Eyes.mp3', title: 'Blue Eyes', artist: 'J Balvin' },
//     { src: '../../../public/songs/Alan_Walker_Fadded.mp3', title: 'Faded', artist: 'Alan Walker' },
//     { src: '../../../public/songs/Allah_Duhai.mp3', title: 'Alah Duhai', artist: 'Salman Khan' },
//     { src: '../../../public/songs/Apsara_Aali.mp3', title: 'Apsara', artist: 'Apsara' },
//     { src: '../../../public/songs/BILLO_STAR.mp3', title: 'BILLO', artist: 'BILLO' },
//     { src: '../../../public/songs/Blue_Eyes.mp3', title: 'Blue Eyes', artist: 'J Balvin' },
//   ];

//   const handleCreatePlaylist = () => {
//     if (newPlaylistName) {
//       createPlaylist(newPlaylistName);
//       setNewPlaylistName('');
//     }
//   };

//   const handleUpload = (event) => {
//     const file = event.target.files[0];
//     setUploadFile(file);
//     // Implement upload logic here
//   };

//   const handleLogout = () => {
//     // Implement logout logic here
//   };

//   const handleAlbumClick = (index) => {
//     setCurrentTrackIndex(index);
//     setIsPlaying(true);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#181818] text-white p-6 fixed h-full overflow-y-auto">
//         <div className="flex flex-col items-center mb-8">
//           <span className="text-3xl font-bold bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF] bg-clip-text text-transparent">
//             Beatify
//           </span>

//           <div className="w-full h-1 bg-gray-700 my-4"></div>
//         </div>

//         <nav>
//           <ul className="space-y-4">
//             <li className="mb-3">
//               <button
//                 className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
//                   selectedFeature === 'home' ? 'bg-gray-800 text-green-500' : ''
//                 }`}
//                 onClick={() => setSelectedFeature('home')}
//               >
//                 <i className="fas fa-home mr-2"></i>
//                 Home
//               </button>
//             </li>
//             <li className="mb-3">
//               <button
//                 className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
//                   selectedFeature === 'upload' ? 'bg-gray-800 text-green-500' : ''
//                 }`}
//                 onClick={() => setSelectedFeature('upload')}
//               >
//                 <i className="fas fa-upload mr-2"></i>
//                 Upload Song
//               </button>
//             </li>
//             <li className="mb-3">
//               <button
//                 className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
//                   selectedFeature === 'recent' ? 'bg-gray-800 text-green-500' : ''
//                 }`}
//                 onClick={() => setSelectedFeature('recent')}
//               >
//                 <i className="fas fa-history mr-2"></i>
//                 Recently Played
//               </button>
//             </li>
//             <li className="mb-3">
//               <button
//                 className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
//                   selectedFeature === 'mostPlayed' ? 'bg-gray-800 text-green-500' : ''
//                 }`}
//                 onClick={() => setSelectedFeature('mostPlayed')}
//               >
//                 <i className="fas fa-chart-line mr-2"></i>
//                 Most Played
//               </button>
//             </li>
//             <li className="mb-3">
//               <button
//                 className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
//                   selectedFeature === 'favorites' ? 'bg-gray-800 text-green-500' : ''
//                 }`}
//                 onClick={() => setSelectedFeature('favorites')}
//               >
//                 <i className="fas fa-heart mr-2"></i>
//                 Your Favorites
//               </button>
//             </li>
//             <li className="mb-3">
//               <button
//                 className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
//                   selectedFeature === 'playlists' ? 'bg-gray-800 text-green-500' : ''
//                 }`}
//                 onClick={() => setSelectedFeature('playlists')}
//               >
//                 <i className="fas fa-list mr-2"></i>
//                 Your Playlists
//               </button>
//             </li>
//             <li className="mb-3">
//               <button
//                 className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
//                   selectedFeature === 'addPlaylist' ? 'bg-gray-800 text-green-500' : ''
//                 }`}
//                 onClick={() => setSelectedFeature('addPlaylist')}
//               >
//                 <i className="fas fa-plus mr-2"></i>
//                 Add Playlist
//               </button>
//             </li>
//             <li className="mb-3">
//               <button
//                 className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
//                   selectedFeature === 'settings' ? 'bg-gray-800 text-green-500' : ''
//                 }`}
//                 onClick={() => setSelectedFeature('settings')}
//               >
//                 <i className="fas fa-cog mr-2"></i>
//                 Settings
//               </button>
//             </li>
//             <li className="mb-3">
//               <button
//                 className="w-full text-left flex items-center p-2 rounded hover:bg-gray-800 text-red-500"
//                 onClick={handleLogout}
//               >
//                 <i className="fas fa-sign-out-alt mr-2"></i>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="ml-64 flex-1 bg-gray-200 grid grid-cols-1">
//         {/* Header Section */}
//         <div className='w-full h-20 p-4 bg-[#181818]'>
//           <header className="flex items-center justify-between gap-x-14">
//             {/* Search Bar */}
//             <div className="w-full relative flex items-center">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg  
//                   aria-hidden="true"
//                   className="w-5 h-5 text-gray-300"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                     clipRule="evenodd"
//                   />  
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search for a song..."
//                 className="w-full px-10 py-2 rounded-xl bg-white text-gray-300 border-2 border-[#ACACAC]"
//               />
//             </div>
//             {/* User Profile */}
//             <div className="w-52 flex justify-end gap-x-6">
//               <button className="px-4 py-2 text-center text-sm text-white rounded-3xl bg-gradient-to-r from-green-400 to-blue-500">
//                 Premium
//               </button>
//               <div>
//                 <img src={assets.userProfile} 
//                   alt="User Profile" 
//                   className="w-10 h-10 rounded-full border-2 border-[#8568F5]" 
//                 />
//               </div>
//             </div>
//           </header>
//         </div>

//         <div className="p-6 text-slate-900 overflow-y-auto">
//           {/* Home Section */}
//           {selectedFeature === 'home' && (
//             <div>
//               <h2 className="text-xl font-bold mb-6">Recommended</h2>

//               <div className="grid grid-cols-6 gap-4 mb-8">
//                 {[
//                   assets.album1,
//                   assets.album3,
//                   assets.album4,
//                   assets.album5,
//                   assets.album6,
//                   assets.album2,
//                 ].map((album, index) => (
//                   <div
//                     key={index}
//                     className="w-46 text-start rounded-lg mx-0 cursor-pointer"
//                     onClick={() => handleAlbumClick(index)}
//                   >
//                     <img
//                       src={album}
//                       alt={`Album ${index + 1}`}
//                       className="w-full h-48 rounded-lg mb-6"
//                     />
//                     <h3 className="text-xl font-semibold">Jiwa yan gersedih</h3>
//                     <p className="text-gray-500">Ghea Indrawati</p>
//                   </div>
//                 ))}
//               </div>

//               <h2 className="text-xl font-bold mb-6">Top Album</h2>

//               <div className="grid grid-cols-6 gap-4 mb-8">
//                 {[
//                   assets.topAlbum1,
//                   assets.topAlbum2,
//                   assets.topAlbum3,
//                   assets.topAlbum4,
//                   assets.topAlbum5,
//                   assets.topAlbum6,
//                 ].map((album, index) => (
//                   <img
//                     key={index}
//                     src={album}
//                     alt={`Top Album ${index + 1}`}
//                     className="w-full h-48 rounded-lg mb-6"
//                   />
//                 ))}
//               </div>

//               <MusicPlayer
//                 tracks={tracks}
//                 currentTrackIndex={currentTrackIndex}
//                 isPlaying={isPlaying}
//                 setIsPlaying={setIsPlaying}
//                 setCurrentTrackIndex={setCurrentTrackIndex}
//               />
//             </div>
//           )}

//           {/* Upload Section */}
//           {selectedFeature === 'upload' && (
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Upload Song</h2>
//               <input
//                 type="file"
//                 accept="audio/*"
//                 onChange={handleUpload}
//                 className="mb-4"
//               />
//             </div>
//           )}

//           {/* Recently Played Section */}
//           {selectedFeature === 'recent' && (
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
//               {recentSongs.map((song, index) => (
//                 <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
//                   <span>{song.name}</span>
//                   <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Most Played Section */}
//           {selectedFeature === 'mostPlayed' && (
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Most Played</h2>
//               {mostPlayedSongs.map((song, index) => (
//                 <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
//                   <span>{song.name}</span>
//                   <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Favorites Section */}
//           {selectedFeature === 'favorites' && (
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Your Favorites</h2>
//               {likedSongs.map((song, index) => (
//                 <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
//                   <span>{song.name}</span>
//                   <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Playlists Section */}
//           {selectedFeature === 'playlists' && (
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Your Playlists</h2>
//               {playlists.map((playlist, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
//                   <h3 className="text-xl font-semibold mb-4">{playlist.name}</h3>
//                   {playlist.songs.map((song, index) => (
//                     <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
//                       <span>{song.name}</span>
//                       <button
//                         className="text-sm bg-red-600 p-1 rounded"
//                         onClick={() => deleteSongFromPlaylist(song, playlist.name)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Add Playlist Section */}
//           {selectedFeature === 'addPlaylist' && (
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Add Playlist</h2>
//               <input
//                 type="text"
//                 value={newPlaylistName}
//                 onChange={(e) => setNewPlaylistName(e.target.value)}
//                 placeholder="Enter playlist name"
//                 className="w-full p-2 rounded-lg mb-4"
//               />
//               <button
//                 className="bg-blue-600 p-2 rounded text-white"
//                 onClick={handleCreatePlaylist}
//               >
//                 Create Playlist
//               </button>
//             </div>
//           )}

//           {/* Settings Section */}
//           {selectedFeature === 'settings' && (
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Settings</h2>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
//                   {/* Add account settings content */}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-4">Audio Settings</h3>
//                   {/* Add audio settings content */}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import assets from '../../assets/assets';
import MusicPlayer from '../MusicPlayer';
import UploadSongs from '../UploadSongs';
import Playlist from '../Playlist';

const Dashboard = ({
  playlists = [], // Default value to ensure playlists is always an array
  likedSongs = [],
  recentSongs = [],
  mostPlayedSongs = [],
  customPlaylists = [],
  createPlaylist,
  deleteSongFromPlaylist,
  addSongToFavorites
}) => {
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('home');
  const [uploadFile, setUploadFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploadedSongs, setUploadedSongs] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  const tracks = [
    { src: '../../../public/songs/Amplifier.mp3', title: 'Amplifier', artist: 'Imran Khan' },
    { src: '../../../public/songs/Blue_Eyes.mp3', title: 'Blue Eyes', artist: 'J Balvin' },
    { src: '../../../public/songs/Alan_Walker_Fadded.mp3', title: 'Faded', artist: 'Alan Walker' },
    { src: '../../../public/songs/Allah_Duhai.mp3', title: 'Alah Duhai', artist: 'Salman Khan' },
    { src: '../../../public/songs/Apsara_Aali.mp3', title: 'Apsara', artist: 'Apsara' },
    { src: '../../../public/songs/BILLO_STAR.mp3', title: 'BILLO', artist: 'BILLO' },
    { src: '../../../public/songs/Blue_Eyes.mp3', title: 'Blue Eyes', artist: 'J Balvin' },
  ];

  useEffect(() => {
    setCurrentPlaylist(tracks);
  }, []);

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

  const handleAlbumClick = (index) => {
    setCurrentTrackIndex(index);
    setCurrentPlaylist(tracks);
    setIsPlaying(true);
  };

  const addSongToPlaylist = (song) => {
    setUploadedSongs([...uploadedSongs, song]);
  };

  const handlePlaySong = (song) => {
    const allSongs = [...tracks, ...uploadedSongs];
    const songIndex = allSongs.findIndex(track => track.title === song.title);
    if (songIndex !== -1) {
      setCurrentTrackIndex(songIndex);
      setCurrentPlaylist(allSongs);
      setIsPlaying(true);
    }
  };

  const handleAddSongToFavorites = (song) => {
    if (!likedSongs.some(likedSong => likedSong.title === song.title)) {
      addSongToFavorites(song);
    }
  };

  const setCurrentSong = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#181818] text-white p-6 fixed h-full overflow-y-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="text-3xl font-bold bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF] bg-clip-text text-transparent">
            Beatify
          </span>

          <div className="w-full h-1 bg-gray-700 my-4"></div>
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
      <main className="ml-64 flex-1 bg-gray-200 grid grid-cols-1">
        {/* Header Section */}
        <div className='w-full h-20 p-4 bg-[#181818]'>
          <header className="flex items-center justify-between gap-x-14">
            {/* Search Bar */}
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
                placeholder="Search for a song..."
                className="w-full px-10 py-2 rounded-xl bg-white text-gray-300 border-2 border-[#ACACAC]"
              />
            </div>
            {/* User Profile */}
            <div className="w-52 flex justify-end gap-x-6">
              <button className="px-4 py-2 text-center text-sm text-white rounded-3xl bg-gradient-to-r from-green-400 to-blue-500">
                Premium
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
              <h2 className="text-xl font-bold mb-6">Recommended</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-12 md:gap-x-6 md:gap-y-8 lg:gap-4 mb-8">
                {[
                  assets.album1,
                  assets.album3,
                  assets.album4,
                  assets.album5,
                  assets.album6,
                  assets.album2,
                ].map((album, index) => (
                  <div
                    key={index}
                    className="w-46 text-start rounded-lg mx-0 cursor-pointer"
                    onClick={() => handleAlbumClick(index)}
                  >
                    <img
                      src={album}
                      alt={`Album ${index + 1}`}
                      className="w-full h-48 rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-semibold">Jiwa yan gersedih</h3>
                    <p className="text-gray-500">Ghea Indrawati</p>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mb-6">Top Album</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-12 md:gap-x-6 md:gap-y-8 lg:gap-4 mb-8">
                {[
                  assets.topAlbum1,
                  assets.topAlbum2,
                  assets.topAlbum3,
                  assets.topAlbum4,
                  assets.topAlbum5,
                  assets.topAlbum6,
                ].map((album, index) => (
                  <img
                    key={index}
                    src={album}
                    alt={`Top Album ${index + 1}`}
                    className="w-full h-48 rounded-lg mb-6"
                  />
                ))}
              </div>

              <MusicPlayer
                tracks={currentPlaylist}
                currentTrackIndex={currentTrackIndex}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setCurrentTrackIndex={setCurrentTrackIndex}
              />
            </div>
          )}

          {/* Upload Section */}
          {selectedFeature === 'upload' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Upload Song</h2>
              <UploadSongs addSongToPlaylist={addSongToPlaylist} />
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
            <div className='overflow-y-auto h-full w-full border border-green-400'>
              <h2 className="text-2xl font-bold mb-6">Your Playlists</h2>
              {playlists.map((playlist, index) => (
                <Playlist
                  key={index}
                  playlist={playlist.songs}
                  setCurrentSong={(songIndex) => {
                    setCurrentPlaylist(playlist.songs);
                    setCurrentSong(songIndex);
                  }}
                  deleteSongFromPlaylist={deleteSongFromPlaylist}
                  playlistName={playlist.name}
                />
              ))}
              {uploadedSongs.length > 0 && (
                <div className="bg-white p-4 rounded-lg shadow mb-4">
                  <h3 className="text-xl font-semibold mb-4">Uploaded Songs</h3>
                  {uploadedSongs.map((song, index) => (
                    <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                      <span>{song.name}</span>
                      <div className="flex space-x-2">
                        <button
                          className="text-sm bg-blue-600 p-1 rounded"
                          onClick={() => handlePlaySong(song)}
                        >
                          Play
                        </button>
                        <button
                          className="text-sm bg-green-600 p-1 rounded"
                          onClick={() => handleAddSongToFavorites(song)}
                        >
                          Add to Favorites
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                Create Playlist
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
