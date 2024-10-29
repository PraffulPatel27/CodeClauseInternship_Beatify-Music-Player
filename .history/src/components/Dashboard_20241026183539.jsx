// import React, { useState } from 'react';

// import Header from './Header';

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

//   const handleCreatePlaylist = () => {
//     if (newPlaylistName) {
//       createPlaylist(newPlaylistName);
//       setNewPlaylistName('');
//     }
//   };

//   return (
//     <div>
//       <Header />
      
//       <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl mb-4">Dashboard</h2>

//       {/* Custom Playlists Section */}
//       <div className="mb-6">
//         <h3 className="text-lg mb-2">Create a Playlist</h3>
//         <input 
//           type="text"
//           value={newPlaylistName}
//           onChange={(e) => setNewPlaylistName(e.target.value)}
//           className="p-2 rounded bg-gray-700 text-white mb-2"
//           placeholder="Enter playlist name"
//         />
//         <button onClick={handleCreatePlaylist} className="bg-blue-600 p-2 rounded">Create Playlist</button>

//         <div className="mt-4">
//           <h3 className="text-lg mb-2">Your Playlists</h3>
//           {customPlaylists.map((playlist, index) => (
//             <div key={index} className="p-2 bg-gray-700 rounded mb-2">
//               <h4 className="text-md">{playlist.name}</h4>
//               <button className="bg-blue-600 p-2 mt-2 rounded">Play Playlist</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Liked Songs Section */}
//       <div className="mb-6">
//         <h3 className="text-lg mb-2">Liked Songs</h3>
//         {likedSongs.length > 0 ? (
//           <button className="bg-green-600 p-2 rounded">Play Liked Playlist</button>
//         ) : (
//           <p>No liked songs yet.</p>
//         )}
//       </div>

//       {/* Library Section */}
//       <div className="mb-6">
//         <h3 className="text-lg mb-2">Library</h3>
        
//         <div>
//           <h4 className="text-md mb-2">Recently Played</h4>
//           {recentSongs.length > 0 ? recentSongs.map((song, index) => (
//             <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
//               <span>{song.name}</span>
//               <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
//             </div>
//           )) : <p>No recent songs.</p>}
//         </div>

//         <div className="mt-4">
//           <h4 className="text-md mb-2">Most Played</h4>
//           {mostPlayedSongs.length > 0 ? mostPlayedSongs.map((song, index) => (
//             <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
//               <span>{song.name}</span>
//               <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
//             </div>
//           )) : <p>No most played songs.</p>}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      <div className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800">Musiverse</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search artist, title, album"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 ml-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            Premium
          </button>
        </div>
      </div>

      <div className="flex flex-1 mt-4 p-4">
        <div className="w-1/4 bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Discover</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm2 0a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm2 0a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
                Trending
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recommended</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm2 0a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
                Song 1
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm2 0a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
                Song 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
