// import React, { useState } from 'react';

// const UploadSongs = ({ setPlaylist }) => {
//   const [uploadedSongs, setUploadedSongs] = useState([]);

//   const handleSongUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const songs = files.map(file => ({
//       name: file.name,
//       url: URL.createObjectURL(file)
//     }));
//     setUploadedSongs([...uploadedSongs, ...songs]);
//     setPlaylist(prev => [...prev, ...songs]);
//   };

//   return (
//     <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
//       <h3 className="text-lg mb-2">Upload Songs</h3>
//       <input
//         type="file"
//         multiple
//         onChange={handleSongUpload}
//         accept="audio/*"
//         className="mb-4"
//       />
//       <ul>
//         {uploadedSongs.map((song, idx) => (
//           <li key={idx} className="mb-1">{song.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UploadSongs;


import React, { useState } from 'react';

const UploadSongs = ({ setPlaylist }) => {
  const [uploadedSongs, setUploadedSongs] = useState([]);

  const handleSongUpload = (e) => {
    const files = Array.from(e.target.files);
    const songs = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    setUploadedSongs([...uploadedSongs, ...songs]);
    setPlaylist(prev => [...prev, ...songs]);
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h3 className="text-lg mb-2">Upload Songs</h3>
      <input
        type="file"
        multiple
        onChange={handleSongUpload}
        accept="audio/*"
        className="mb-4"
      />
      <ul>
        {uploadedSongs.map((song, idx) => (
          <li key={idx} className="mb-1">{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UploadSongs;