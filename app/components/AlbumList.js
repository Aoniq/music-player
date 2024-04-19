'use client';
import React, { useState, useEffect } from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import SongData from "./songData";
import NowPlaying from "./NowPlaying";
import { useNowPlaying } from './NowPlayingProvider';
import AlbumCard from './AlbumCard';

export default function Albumlist() {
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

    const handlePlayToggle = (index) => {
        setSongs(prevSongs => {
            const updatedSongs = prevSongs.map((song, i) => {
                if (i === index) {
                    return { ...song, isPlaying: !song.isPlaying };
                } else if (song.isPlaying) {
                    return { ...song, isPlaying: false };
                }
                return song;
            });
            return updatedSongs;
        });
        updateNowPlayingSong(songs[index]);
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
                <AlbumCard
                    key={index}
                    artistName={song.artistName}
                    albumName={song.albumName}
                    albumCover={song.albumCover}
                />
            ))}
                    </div>
    );    
}
