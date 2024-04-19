"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useNowPlaying } from "./NowPlayingProvider";
import { FaPause, FaPlay } from "react-icons/fa";

const NowPlaying = () => {
    const audioRef = useRef(null);
    const { nowPlayingSong } = useNowPlaying();

    // Pause the current song when the nowPlayingSong changes
    useEffect(() => {
        if (audioRef.current) {
            if (nowPlayingSong) {
                if (audioRef.current.paused) {
                    audioRef.current.play();
                }
            } else {
                audioRef.current.pause();
                audioRef.current.load();
            }
        }
    }, [nowPlayingSong]);
    

    // Render nothing if there is no currently playing song
    if (!nowPlayingSong) {
        return null;
    }

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause(); // Pause the song
        }
    };

    return (
        <div className="flex w-full shadow justify-center">
            <div className="bg-stone-800 rounded-md w-full">
                <div className="flex justify-between w-full flex-col">
                    <div className="flex justify-between items-center gap-4 p-2">
                        <div className="flex items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src={nowPlayingSong.albumCover}
                                alt={nowPlayingSong.albumName}
                                className="rounded-md"
                            />
                            <div className="flex justify-center items-start flex-col">
                                <h2 className="text-xl font-bold text-white">{nowPlayingSong.songName}</h2>
                                <p className="text-stone-400">{nowPlayingSong.artistName}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={handlePause} className="text-white">
                                <FaPause />
                            </button>
                        </div>
                        <audio autoPlay ref={audioRef}>
                            <source src={`/songs/${nowPlayingSong.audio}`} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;
