import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ playlist, setPlaylist, currentSong, setCurrentSong, likedSongs, setLikedSongs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  // Play or pause song
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  // Handle next and previous songs
  const handleNext = () => {
    if (currentSong < playlist.length - 1) {
      setCurrentSong(currentSong + 1);
      setIsPlaying(true); // Automatically play next song
    }
  };

  const handlePrev = () => {
    if (currentSong > 0) {
      setCurrentSong(currentSong - 1);
      setIsPlaying(true); // Automatically play previous song
    }
  };

  // Update current time and progress bar
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // Automatically play or pause when currentSong changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-xl mb-4">{playlist[currentSong]?.name || "No song selected"}</h2>
      <audio
        ref={audioRef}
        src={playlist[currentSong]?.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        onEnded={handleNext}
      ></audio>
      
      {/* Progress Bar */}
      <div className="w-full mt-2">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          className="w-full"
        />
      </div>
      {/* Time Display */}
      <div className="flex justify-between w-full text-sm mt-1">
        <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
        <span>{Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}</span>
      </div>
      
      {/* Control Buttons */}
      <div className="flex justify-between items-center w-full mt-4">
        <button onClick={handlePrev} className="p-2 bg-gray-700 rounded">Prev</button>
        <button onClick={togglePlayPause} className="p-2 bg-green-600 rounded">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleNext} className="p-2 bg-gray-700 rounded">Next</button>
      </div>

      {/* Volume Control */}
      <div className="mt-4">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={volume} 
          onChange={handleVolumeChange} 
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;