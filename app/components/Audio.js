// Audio.jsx
"use client";
import React, { useRef, useEffect } from "react";
import { useNowPlaying } from "./NowPlayingProvider";

const Audio = () => {
    const { nowPlayingSong } = useNowPlaying();
    const audioRef = useRef(null);

    useEffect(() => {
        if (!nowPlayingSong) return;

        audioRef.current.src = `/songs/${nowPlayingSong.audio}`;

        if (nowPlayingSong.isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [nowPlayingSong]);

    return (
        <audio ref={audioRef} id="songPlayer">
            Your browser does not support the audio element.
        </audio>
    );
};

export default Audio;