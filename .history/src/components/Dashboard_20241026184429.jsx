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


import React, { useState } from 'react';
import Header from './Header';

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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-2xl mb-4">Musiverse</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <button 
                className={`w-full text-left ${selectedFeature === 'home' ? 'text-blue-500' : ''}`}
                onClick={() => setSelectedFeature('home')}
              >
                Home
              </button>
            </li>

            <li className="mb-2">
              <button 
                className={`w-full text-left ${selectedFeature === 'home' ? 'text-blue-500' : ''}`}
                onClick={() => setSelectedFeature('home')}
              >
                Albums
              </button>
            </li>

            <li className="mb-2">
              <button 
                className={`w-full text-left ${selectedFeature === 'recent' ? 'text-blue-500' : ''}`}
                onClick={() => setSelectedFeature('recent')}
              >
                Recently Played
              </button>
            </li>

            <li className="mb-2">
              <button 
                className={`w-full text-left ${selectedFeature === 'liked' ? 'text-blue-500' : ''}`}
                onClick={() => setSelectedFeature('liked')}
              >
                Liked Songs
              </button>
            </li>

            <li className="mb-2">
              <button 
                className={`w-full text-left ${selectedFeature === 'playlists' ? 'text-blue-500' : ''}`}
                onClick={() => setSelectedFeature('playlists')}
              >
                Playlists
              </button>
            </li>
            {/* Add more features as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <Header />
        
        {selectedFeature === 'home' && (
          <div>
            <h2 className="text-2xl mb-4">Home</h2>
            {/* Add Home content */}
            <div>Recommended songs, top charts, etc.</div>
          </div>
        )}

        {selectedFeature === 'liked' && (
          <div>
            <h2 className="text-2xl mb-4">Liked Songs</h2>
            {likedSongs.length > 0 ? (
              <button className="bg-green-600 p-2 rounded">Play Liked Playlist</button>
            ) : (
              <p>No liked songs yet.</p>
            )}
          </div>
        )}

        {selectedFeature === 'playlists' && (
          <div>
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

              <div className="mt-4">
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
          <div>
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

