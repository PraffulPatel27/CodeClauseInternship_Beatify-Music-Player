// const SongList = ({ playlist, setCurrentSong, addToLiked }) => {
//     return (
//       <div className="song-list">
//         {playlist.length > 0 ? playlist.map((song, index) => (
//           <div key={index} className="song-item flex justify-between p-2 bg-gray-700 rounded mb-2">
//             <span>{song.name}</span>
//             <div>
//               <button onClick={() => setCurrentSong(index)} className="text-sm bg-blue-600 p-1 rounded">Play</button>
//               <button onClick={() => addToLiked(song)} className="ml-2 text-sm bg-red-600 p-1 rounded">Like</button>
//             </div>
//           </div>
//         )) : <p>No songs available.</p>}
//       </div>
//     );
//   };
  
//   export default SongList;
  


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