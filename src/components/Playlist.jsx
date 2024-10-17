// import React from 'react';

// const Playlist = ({ playlist, setCurrentSong, setPlaylist }) => {
//   const handleSongClick = (index) => {
//     setCurrentSong(index);
//   };

//   const handleDelete = (index) => {
//     setPlaylist(playlist.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-4 bg-gray-800 rounded-lg text-white shadow-lg">
//       <h3 className="text-lg mb-2">Playlist</h3>
//       <ul>
//         {playlist.map((song, index) => (
//           <li key={index} className="flex justify-between items-center mb-2">
//             <span onClick={() => handleSongClick(index)} className="cursor-pointer">{song.name}</span>
//             <button onClick={() => handleDelete(index)} className="bg-red-600 p-1 rounded">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Playlist;


import React from 'react';

const Playlist = ({ playlist, setCurrentSong, deleteSongFromPlaylist, playlistName }) => {
  const handleSongClick = (index) => {
    setCurrentSong(index);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg text-white shadow-lg">
      <h3 className="text-lg mb-2">{playlistName}</h3>
      <ul>
        {playlist.map((song, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span onClick={() => handleSongClick(index)} className="cursor-pointer">{song.name}</span>
            <button onClick={() => deleteSongFromPlaylist(song, playlistName)} className="bg-red-600 p-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;