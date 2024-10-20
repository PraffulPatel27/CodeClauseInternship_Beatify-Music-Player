// import React from 'react';

// const playSong = (index) => {
//     const song = playlist[index];
//     song.playCount = (song.playCount || 0) + 1;
  
//     setMostPlayedSongs(
//       [...mostPlayedSongs.filter((s) => s.name !== song.name), song].sort(
//         (a, b) => b.playCount - a.playCount
//       )
//     );
//   };
  

// const Dashboard = ({ 
//   playlists, 
//   likedSongs, 
//   recentSongs, 
//   mostPlayedSongs, 
//   playFromPlaylist, 
//   playFromLiked, 
//   playFromLibrary 
// }) => {

//   return (
//     <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl mb-4">Dashboard</h2>

//       {/* Custom Playlists Section */}
//       <div className="mb-6">
//         <h3 className="text-lg mb-2">Your Playlists</h3>
//         {playlists.map((playlist, index) => (
//           <div key={index} className="p-2 bg-gray-700 rounded mb-2">
//             <h4 className="text-md">{playlist.name}</h4>
//             <button 
//               onClick={() => playFromPlaylist(playlist.songs)}
//               className="bg-blue-600 p-2 mt-2 rounded"
//             >
//               Play Playlist
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Liked Songs Section */}
//       <div className="mb-6">
//         <h3 className="text-lg mb-2">Liked Songs</h3>
//         {likedSongs.length > 0 ? (
//           <button onClick={playFromLiked} className="bg-green-600 p-2 rounded">Play Liked Playlist</button>
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
//               <button onClick={() => playFromLibrary(song)} className="text-sm bg-blue-600 p-1 rounded">Play</button>
//             </div>
//           )) : <p>No recent songs.</p>}
//         </div>

//         <div className="mt-4">
//           <h4 className="text-md mb-2">Most Played</h4>
//           {mostPlayedSongs.length > 0 ? mostPlayedSongs.map((song, index) => (
//             <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
//               <span>{song.name}</span>
//               <button onClick={() => playFromLibrary(song)} className="text-sm bg-blue-600 p-1 rounded">Play</button>
//             </div>
//           )) : <p>No most played songs.</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';

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

  const handleCreatePlaylist = () => {
    if (newPlaylistName) {
      createPlaylist(newPlaylistName);
      setNewPlaylistName('');
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">Dashboard</h2>

      {/* Custom Playlists Section */}
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

      {/* Liked Songs Section */}
      <div className="mb-6">
        <h3 className="text-lg mb-2">Liked Songs</h3>
        {likedSongs.length > 0 ? (
          <button className="bg-green-600 p-2 rounded">Play Liked Playlist</button>
        ) : (
          <p>No liked songs yet.</p>
        )}
      </div>

      {/* Library Section */}
      <div className="mb-6">
        <h3 className="text-lg mb-2">Library</h3>
        
        <div>
          <h4 className="text-md mb-2">Recently Played</h4>
          {recentSongs.length > 0 ? recentSongs.map((song, index) => (
            <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
              <span>{song.name}</span>
              <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
            </div>
          )) : <p>No recent songs.</p>}
        </div>

        <div className="mt-4">
          <h4 className="text-md mb-2">Most Played</h4>
          {mostPlayedSongs.length > 0 ? mostPlayedSongs.map((song, index) => (
            <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
              <span>{song.name}</span>
              <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
            </div>
          )) : <p>No most played songs.</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
