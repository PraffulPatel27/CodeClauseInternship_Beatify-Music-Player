import React from 'react';

const LikedPlaylist = ({ likedSongs, setLikedSongs, playLikedSong }) => {
  const deleteLikedSong = (index) => {
    setLikedSongs(likedSongs.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h3 className="text-lg mb-4">Liked Songs</h3>
      <ul className="space-y-2">
        {likedSongs.map((song, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"
          >
            <span onClick={() => playLikedSong(index)}>{song.name}</span>  {/* Play liked song */}
            <button
              onClick={() => deleteLikedSong(index)}
              className="bg-red-600 p-1 rounded hover:bg-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedPlaylist;