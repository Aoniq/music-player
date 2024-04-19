'use client';
import React, { useState, useEffect } from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import SongCard from "./SongCard";
import SongData from "./songData";
import NowPlaying from "./NowPlaying";
import { useNowPlaying } from './NowPlayingProvider';

export default function SongList() {
    const { nowPlayingSong, updateNowPlayingSong } = useNowPlaying();
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSongData = async () => {
            try {
                const songData = await SongData();
                setSongs(songData.map(song => ({ ...song, isPlaying: false })));
                setLoading(false);
            } catch (error) {
                setError("Er is een fout opgetreden bij het ophalen van de gegevens.");
            }
        };
        fetchSongData();
    }, []);

    // Update currently playing song when songs array changes
    useEffect(() => {
        if (nowPlayingSong && songs.length > 0) {
            const playingSong = songs.find(song => song.audio === nowPlayingSong.audio);
            if (!playingSong) {
                // If the currently playing song is not in the songs array, stop playing it
                updateNowPlayingSong(null);
            }
        }
    }, [songs, nowPlayingSong, updateNowPlayingSong]);

    const handlePlayToggle = (index) => {
        setSongs(prevSongs => {
            const updatedSongs = prevSongs.map((song, i) => {
                if (i === index) {
                    return { ...song, isPlaying: true }; // Start playing the selected song
                } else {
                    return { ...song, isPlaying: false }; // Stop playing other songs
                }
            });
            return updatedSongs;
        });
        updateNowPlayingSong(songs[index]); // Update currently playing song
    };
    

    if (loading) {
        return <div className="flex items-center justify-center"><AiOutlineLoading className="animate-spin text-white" size={200} /></div>;
    }

    if (error) {
        return <div className="text-red-400">{error}</div>;
    }

    return (
        <div className="w-full flex flex-col overflow-y-scroll h-full justify-start p-2 gap-4 relative">
            {songs.map((song, index) => (
                <SongCard
                    key={index}
                    songName={song.songName}
                    artistName={song.artistName}
                    albumName={song.albumName}
                    albumCover={song.albumCover}
                    isPlaying={song.isPlaying}
                    onPlayToggle={() => handlePlayToggle(index)} // Pass index to onPlayToggle
                    index={index} // Pass index to SongCard
                />
            ))}
            {/* {nowPlayingSong && <NowPlaying song={nowPlayingSong} />} */}
        </div>
    );  
}
