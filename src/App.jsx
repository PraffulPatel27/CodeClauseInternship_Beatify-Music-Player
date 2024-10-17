// import React, { useState } from 'react';
// import MusicPlayer from './components/MusicPlayer';
// import SongList from './components/SongList';
// import UploadSongs from './components/UploadSongs';
// import Dashboard from './components/Dashboard';
// import SearchBar from './components/SearchBar';

// function App() {
//   // Predefined songs with necessary metadata
//   const initialSongs = [
//     {
//       name: 'Aaj Ki Party',
//       artist: 'Artist One',
//       url: '../public/songs/Aaj_Ki_Party.mp3',
//       playCount: 0
//     },
//     {
//       name: 'Akh Lad Jaave',
//       artist: 'Artist Two',
//       url: '../public/songs/Akh_Lad_Jaave.mp3', 
//       playCount: 0
//     },
//     {
//       name: 'Alan Walked Faded',
//       artist: 'Artist Three',
//       url: '../public/songs/Alan_Walker_Fadded.mp3', 
//       playCount: 0
//     },
//     {
//       name: 'Allah Duhai',
//       artist: 'Artist Four',
//       url: '../public/songs/Allah_Duhai.mp3', 
//       playCount: 0
//     },
//     {
//       name: 'Amplifier',
//       artist: 'Artist Five',
//       url: '../public/songs/Amplifier.mp3', 
//       playCount: 0
//     },
//     {
//       name: 'Apsara Aali',
//       artist: 'Artist Six',
//       url: '../public/songs/Apsara_Aali.mp3', 
//       playCount: 0
//     },
//     {
//       name: 'Billo Star',
//       artist: 'Artist Seven',
//       url: '../public/songs/BILLO_STAR.mp3', 
//       playCount: 0
//     },
//     {
//       name: 'Blue Eyes',
//       artist: 'Artist Eight',
//       url: '../public/songs/Blue_Eyes.mp3', 
//       playCount: 0
//     },
//   ];

//   const [playlist, setPlaylist] = useState(initialSongs); // Initialize with predefined songs
//   const [likedSongs, setLikedSongs] = useState([]);
//   const [recentSongs, setRecentSongs] = useState([]);
//   const [mostPlayedSongs, setMostPlayedSongs] = useState([]);
//   const [filteredSongs, setFilteredSongs] = useState([]);
//   const [currentSong, setCurrentSong] = useState(0);

//   const playSong = (index) => {
//     setCurrentSong(index);

//     const song = playlist[index];

//     // Add to recent songs
//     if (!recentSongs.some((recentSong) => recentSong.name === song.name)) {
//       setRecentSongs([...recentSongs, song]);
//     }

//     // Increment play count and update most played
//     song.playCount = (song.playCount || 0) + 1;
//     setMostPlayedSongs(
//       [...mostPlayedSongs.filter((s) => s.name !== song.name), song].sort(
//         (a, b) => b.playCount - a.playCount
//       )
//     );
//   };

//   const addToLiked = (song) => {
//     if (!likedSongs.some((likedSong) => likedSong.name === song.name)) {
//       setLikedSongs([...likedSongs, song]);
//     }
//   };

//   const handleSongSearch = (songs) => {
//     setFilteredSongs(songs);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-6">Music Player App</h1>

//         {/* Dashboard */}
//         <Dashboard
//           playlists={playlist}
//           likedSongs={likedSongs}
//           recentSongs={recentSongs}
//           mostPlayedSongs={mostPlayedSongs}
//         />
        
//         {/* Search Bar */}
//         <SearchBar playlist={playlist} onSongSearch={handleSongSearch} />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <UploadSongs setPlaylist={setPlaylist} />
//           <SongList 
//             playlist={filteredSongs.length > 0 ? filteredSongs : playlist} 
//             setCurrentSong={playSong}
//             addToLiked={addToLiked}
//           />
//         </div>

//         {/* Music Player */}
//         {playlist.length > 0 && (
//           <MusicPlayer
//             playlist={playlist}
//             currentSong={currentSong}
//             setCurrentSong={setCurrentSong}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import SongList from './components/SongList';
import UploadSongs from './components/UploadSongs';
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';

function App() {
  // Predefined songs with necessary metadata
  const initialSongs = [
    { name: 'Aaj Ki Party', artist: 'Artist One', url: '/songs/Aaj_Ki_Party.mp3', playCount: 0 },
    { name: 'Akh Lad Jaave', artist: 'Artist Two', url: '/songs/Akh_Lad_Jaave.mp3', playCount: 0 },
    { name: 'Alan Walker Faded', artist: 'Artist Three', url: '/songs/Alan_Walker_Faded.mp3', playCount: 0 },
    { name: 'Allah Duhai', artist: 'Artist Four', url: '/songs/Allah_Duhai.mp3', playCount: 0 },
    { name: 'Amplifier', artist: 'Artist Five', url: '/songs/Amplifier.mp3', playCount: 0 },
    { name: 'Apsara Aali', artist: 'Artist Six', url: '/songs/Apsara_Aali.mp3', playCount: 0 },
    { name: 'Billo Star', artist: 'Artist Seven', url: '/songs/BILLO_STAR.mp3', playCount: 0 },
    { name: 'Blue Eyes', artist: 'Artist Eight', url: '/songs/Blue_Eyes.mp3', playCount: 0 },
  ];

  const [playlist, setPlaylist] = useState(initialSongs);
  const [likedSongs, setLikedSongs] = useState([]);
  const [recentSongs, setRecentSongs] = useState([]);
  const [mostPlayedSongs, setMostPlayedSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(0);
  const [customPlaylists, setCustomPlaylists] = useState([]); // Stores custom playlists

  const playSong = (index) => {
    setCurrentSong(index);
    const song = playlist[index];
    // Add to recent songs
    if (!recentSongs.some((recentSong) => recentSong.name === song.name)) {
      setRecentSongs([...recentSongs, song]);
    }

    // Increment play count and update most played
    song.playCount = (song.playCount || 0) + 1;
    setMostPlayedSongs(
      [...mostPlayedSongs.filter((s) => s.name !== song.name), song].sort((a, b) => b.playCount - a.playCount)
    );
  };

  const addToLiked = (song) => {
    if (!likedSongs.some((likedSong) => likedSong.name === song.name)) {
      setLikedSongs([...likedSongs, song]);
    }
  };

  const handleSongSearch = (songs) => {
    setFilteredSongs(songs);
  };

  const createPlaylist = (name) => {
    setCustomPlaylists([...customPlaylists, { name, songs: [] }]);
  };

  const addToCustomPlaylist = (song, playlistName) => {
    const updatedPlaylists = customPlaylists.map((playlist) => {
      if (playlist.name === playlistName) {
        return { ...playlist, songs: [...playlist.songs, song] };
      }
      return playlist;
    });
    setCustomPlaylists(updatedPlaylists);
  };

  const deleteSongFromPlaylist = (song, playlistName) => {
    const updatedPlaylists = customPlaylists.map((playlist) => {
      if (playlist.name === playlistName) {
        return { ...playlist, songs: playlist.songs.filter((s) => s.name !== song.name) };
      }
      return playlist;
    });
    setCustomPlaylists(updatedPlaylists);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Music Player App</h1>

        {/* Dashboard */}
        <Dashboard
          playlists={playlist}
          likedSongs={likedSongs}
          recentSongs={recentSongs}
          mostPlayedSongs={mostPlayedSongs}
          customPlaylists={customPlaylists}
          createPlaylist={createPlaylist}
          deleteSongFromPlaylist={deleteSongFromPlaylist}
        />

        {/* Search Bar */}
        <SearchBar playlist={playlist} onSongSearch={handleSongSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UploadSongs setPlaylist={setPlaylist} />
          <SongList 
            playlist={filteredSongs.length > 0 ? filteredSongs : playlist} 
            setCurrentSong={playSong}
            addToLiked={addToLiked}
          />
        </div>

        {/* Music Player */}
        {playlist.length > 0 && (
          <MusicPlayer
            playlist={playlist}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        )}
      </div>
    </div>
  );
}

export default App;
