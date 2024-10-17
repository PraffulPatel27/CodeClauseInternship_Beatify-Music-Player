// import React, { useState } from 'react';

// const SearchBar = ({ playlist, onSongSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e) => {
//     const searchQuery = e.target.value.toLowerCase();
//     setQuery(searchQuery);
//     const filteredSongs = playlist.filter(song => 
//       song.name.toLowerCase().includes(searchQuery) || song.artist.toLowerCase().includes(searchQuery)
//     );
//     onSongSearch(filteredSongs);
//   };

//   return (
//     <div className="mb-4">
//       <input
//         type="text"
//         value={query}
//         onChange={handleSearch}
//         placeholder="Search for a song..."
//         className="w-full p-2 rounded-lg bg-gray-800 text-white"
//       />
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';

const SearchBar = ({ playlist, onSongSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    // Filter the songs based on the query
    const filteredSongs = playlist.filter(song => 
      song.name.toLowerCase().includes(searchQuery) || 
      song.artist.toLowerCase().includes(searchQuery)
    );
    onSongSearch(filteredSongs);
  };
  

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a song..."
        className="w-full p-2 rounded-lg bg-gray-800 text-white"
      />
    </div>
  );
};

export default SearchBar;
