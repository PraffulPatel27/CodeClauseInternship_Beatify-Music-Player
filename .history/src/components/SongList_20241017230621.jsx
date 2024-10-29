// import React from 'react';

// const SongList = ({ playlist, setCurrentSong, deleteSong }) => {
//   return (
//     <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
//       <h3 className="text-lg mb-4">Song List</h3>
//       <ul className="space-y-2">
//         {playlist.map((song, index) => (
//           <li
//             key={index}
//             className="flex justify-between items-center p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"
//           >
//             <span onClick={() => setCurrentSong(index)}>{song.name}</span>
//             <button
//               onClick={() => deleteSong(index)}
//               className="bg-red-600 p-1 rounded hover:bg-red-500"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SongList;


const SongList = ({ playlist, setCurrentSong, addToLiked }) => {
    return (
      <div className="song-list">
        {playlist.length > 0 ? playlist.map((song, index) => (
          <div key={index} className="song-item flex justify-between p-2 bg-gray-700 rounded mb-2">
            <span>{song.name}</span>
            <div>
              <button onClick={() => setCurrentSong(index)} className="text-sm bg-blue-600 p-1 rounded">Play</button>
              <button onClick={() => addToLiked(song)} className="ml-2 text-sm bg-red-600 p-1 rounded">Like</button>
            </div>
          </div>
        )) : <p>No songs available.</p>}
      </div>
    );
  };
  
  export default SongList;
  