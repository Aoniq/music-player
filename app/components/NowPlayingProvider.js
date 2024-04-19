// NowPlayingProvider.js
"use client";
import React, { createContext, useContext, useState } from 'react';

const NowPlayingContext = createContext();

export const useNowPlaying = () => useContext(NowPlayingContext);

export const NowPlayingProvider = ({ children }) => {
    const [nowPlayingSong, setNowPlayingSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); // Track if a song is currently playing

    const updateNowPlayingSong = (song) => {
        if (nowPlayingSong === null || song.audio !== nowPlayingSong.audio) {
            // If no song is currently playing or if a different song is selected, start the new one
            setNowPlayingSong(song);
            setIsPlaying(true); // Start playing the new song
        } else {
            // If the same song is selected, toggle the playback state
            setIsPlaying(!isPlaying);
        }
    };
    
    

    return (
        <NowPlayingContext.Provider value={{ nowPlayingSong, updateNowPlayingSong, isPlaying }}>
            {children}
        </NowPlayingContext.Provider>
    );
};
