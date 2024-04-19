import Image from 'next/image';
import { FaPlay, FaPause } from "react-icons/fa";

export default function SongCard({ songName, artistName, albumName, albumCover, isPlaying, onPlayToggle, index }) {
    const handlePlayClick = () => {
        onPlayToggle(index); // Pass index to onPlayToggle
    };

    return (
        <div className="bg-stone-800 bg-opacity-50 p-4 flex justify-between items-center w-full rounded-md">
            <div className="flex flex-row justify-between gap-4">
                <div className='flex items-center justify-center'>
                    <Image width={100} height={100} src={albumCover} alt={albumName} className="rounded-md" />
                </div>
                <div className='flex justify-center items-start flex-col'>
                    <h2 className="text-xl font-bold text-white">{songName}</h2>
                    <p className="text-stone-400">{artistName}</p>
                </div>
            </div>
            <div className='px-2'>
                <button onClick={handlePlayClick} className="text-amber-500 cursor-pointer">
                    {isPlaying ? <FaPause className="text-amber-500 cursor-pointer" size={24} /> : <FaPlay className="text-amber-500 cursor-pointer" size={24} />}
                </button>
            </div>
        </div>
    );
}
