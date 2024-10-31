import React, { useState, useRef, useEffect } from 'react';
import { Slider } from "primereact/slider";

const MusicPlayer = ({ tracks, currentTrackIndex, isPlaying, setIsPlaying, setCurrentTrackIndex }) => {
  const [volume, setVolume] = useState(0.5); // Default volume set to 50%
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(new Audio(tracks[currentTrackIndex]?.src));

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioDuration = () => setDuration(audio.duration);
    audio.addEventListener('loadedmetadata', setAudioDuration);

    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener('timeupdate', updateCurrentTime);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioDuration);
      audio.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (tracks[currentTrackIndex]) {
      audioRef.current.src = tracks[currentTrackIndex].src;
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrackIndex, isPlaying, tracks]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const playTrack = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const skipTrack = () => {
    const wasPlaying = isPlaying;
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setCurrentTime(0);
    setIsPlaying(wasPlaying);
  };

  const previousTrack = () => {
    const wasPlaying = isPlaying;
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    setCurrentTime(0);
    setIsPlaying(wasPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="music-player bg-gray-400 text-white p-6 rounded-lg flex flex-col items-center">
      {tracks[currentTrackIndex] ? (
        <>
          <div className="track-info text-center mb-4">
            <h3 className="text-2xl font-semibold">{tracks[currentTrackIndex].title}</h3>
            <p className="text-gray-400">{tracks[currentTrackIndex].artist}</p>
          </div>

          <div className="controls flex space-x-4">
            <button onClick={previousTrack}>Previous</button>
            {isPlaying ? (
              <button onClick={pauseTrack}>Pause</button>
            ) : (
              <button onClick={playTrack}>Play</button>
            )}
            <button onClick={skipTrack}>Next</button>
          </div>

          <div className="progress-bar mt-4 w-full">
            <input
              type="range"
              min="0"
              max={duration}
              step="0.01"
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full"
            />
          </div>

          <div className="volume-control mt-4 ">
            <label htmlFor="volume-slider">Volume:</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-32"
            />
          </div>
          
          <div className="time-info flex justify-between w-full mt-4">
            <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
            <span>{Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}</span>
          </div>
        </>
      ) : (
        <p>No track selected</p>
      )}
    </div>
  );
};

export default MusicPlayer;