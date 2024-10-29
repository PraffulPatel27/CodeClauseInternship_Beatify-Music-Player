import React, { useState } from 'react';
import Header from './Header';

// Import your icons/assets here
const assets = {
  homeIcon: '/path/to/home-icon.svg',
  upload: '/path/to/upload-icon.svg',
  recentlyPlayed: '/path/to/recent-icon.svg',
  mostPlayed: '/path/to/most-played-icon.svg',
  yourFavorite: '/path/to/favorite-icon.svg',
  yourPlaylist: '/path/to/playlist-icon.svg',
  addPlaylist: '/path/to/add-playlist-icon.svg',
  setting: '/path/to/settings-icon.svg',
  logout: '/path/to/logout-icon.svg'
};

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
  const [selectedFeature, setSelectedFeature] = useState('home');
  const [uploadFile, setUploadFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreatePlaylist = () => {
    if (newPlaylistName) {
      createPlaylist(newPlaylistName);
      setNewPlaylistName('');
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setUploadFile(file);
    // Implement upload logic here
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 fixed h-full overflow-y-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="text-3xl font-bold bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF] bg-clip-text text-transparent">
            Beatify
          </span>

        {/*** line ***/}
          <div className="w-full h-1 bg-gray-700 my-4">
          </div>
        </div>

        <nav>
          <ul className="space-y-4">
            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'home' ? 'bg-gray-800 text-blue-500' : ''
                }`}
                onClick={() => setSelectedFeature('home')}
              >
                <i className="fas fa-home mr-2"></i>
                Home
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'upload' ? 'bg-gray-800 text-blue-500' : ''
                }`}
                onClick={() => setSelectedFeature('upload')}
              >
                <i className="fas fa-upload mr-2"></i>
                Upload Song
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'recent' ? 'bg-gray-800 text-blue-500' : ''
                }`}
                onClick={() => setSelectedFeature('recent')}
              >
                <i className="fas fa-history mr-2"></i>
                Recently Played
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'mostPlayed' ? 'bg-gray-800 text-blue-500' : ''
                }`}
                onClick={() => setSelectedFeature('mostPlayed')}
              >
                <i className="fas fa-chart-line mr-2"></i>
                Most Played
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'favorites' ? 'bg-gray-800 text-blue-500' : ''
                }`}
                onClick={() => setSelectedFeature('favorites')}
              >
                <i className="fas fa-heart mr-2"></i>
                Your Favorites
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'playlists' ? 'bg-gray-800 text-blue-500' : ''
                }`}
                onClick={() => setSelectedFeature('playlists')}
              >
                <i className="fas fa-list mr-2"></i>
                Your Playlists
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'addPlaylist' ? 'bg-gray-800 text-blue-500' : ''
                }`}
                onClick={() => setSelectedFeature('addPlaylist')}
              >
                <i className="fas fa-plus mr-2"></i>
                Add Playlist
              </button>
            </li>

            <li className="mb-3">
              <button
                className={`w-full text-left flex items-center p-2 rounded hover:bg-gray-800 ${
                  selectedFeature === 'settings' ? 'bg-gray-800 text-blue-500' : ''
                }`}
                onClick={() => setSelectedFeature('settings')}
              >
                <i className="fas fa-cog mr-2"></i>
                Settings
              </button>
            </li>

            <li className="mb-3">
              <button
                className="w-full text-left flex items-center p-2 rounded hover:bg-gray-800 text-red-500"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 bg-gray-100 overflow-y-auto">
        <Header />
        <div className="p-6 text-slate-900">
          {/* Home Section */}
          {selectedFeature === 'home' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Welcome to Musiverse</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Featured Playlists */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">Featured Playlists</h3>
                  {/* Add featured playlists content */}
                </div>

                {/* New Releases */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">New Releases</h3>
                  {/* Add new releases content */}
                </div>

                {/* Recommended */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">Recommended for You</h3>
                  {/* Add recommendations content */}
                </div>
              </div>
            </div>
          )}



          {/* Upload Section */}
          {selectedFeature === 'upload' && (
            <div>
              <h2 className="text-2xl font-bold mb- 6">Upload Song</h2>
              <input
                type="file"
                accept="audio/*"
                onChange={handleUpload}
                className="mb-4"
              />
              {uploadFile && (
                <button className="bg-blue-600 p-2 rounded">
                  Upload {uploadFile.name}
                </button>
              )}
            </div>
          )}

          {/* Recently Played Section */}
          {selectedFeature === 'recent' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
              {recentSongs.map((song, index) => (
                <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                  <span>{song.name}</span>
                  <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
                </div>
              ))}
            </div>
          )}

          {/* Most Played Section */}
          {selectedFeature === 'mostPlayed' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Most Played</h2>
              {mostPlayedSongs.map((song, index) => (
                <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                  <span>{song.name}</span>
                  <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
                </div>
              ))}
            </div>
          )}

          {/* Favorites Section */}
          {selectedFeature === 'favorites' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Favorites</h2>
              {likedSongs.map((song, index) => (
                <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                  <span>{song.name}</span>
                  <button className="text-sm bg-blue-600 p-1 rounded">Play</button>
                </div>
              ))}
            </div>
          )}

          {/* Playlists Section */}
          {selectedFeature === 'playlists' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Playlists</h2>
              {playlists.map((playlist, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
                  <h3 className="text-xl font-semibold mb-4">{playlist.name}</h3>
                  {playlist.songs.map((song, index) => (
                    <div key={index} className="flex justify-between p-2 bg-gray-700 rounded mb-2">
                      <span>{song.name}</span>
                      <button
                        className="text-sm bg-red-600 p-1 rounded"
                        onClick={() => deleteSongFromPlaylist(song, playlist.name)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Add Playlist Section */}
          {selectedFeature === 'addPlaylist' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Add Playlist</h2>
              <input
                type="text"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                placeholder="Enter playlist name"
                className="w-full p-2 rounded-lg mb-4"
              />
              <button
                className="bg-blue-600 p-2 rounded text-white"
                onClick={handleCreatePlaylist}
              >
                Create Play list
              </button>
            </div>
          )}

          {/* Settings Section */}
          {selectedFeature === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Settings</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                  {/* Add account settings content */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Audio Settings</h3>
                  {/* Add audio settings content */}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;