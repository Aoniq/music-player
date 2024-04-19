import Image from 'next/image';

export default function AlbumCard({ albumName, artistName, albumCover }) {
    return (
        <div className="bg-stone-800 bg-opacity-50 p-2 flex justify-center items-center w-full rounded-md">

<div className='flex flex-col justify-between gap-4'>
<div className='flex items-center justify-center'>
        <Image width={100} height={100} src={albumCover} alt={albumName} className="rounded-md" />
    </div>
    <div className='flex justify-center items-center flex-col'>
        <h2 className="text-xl font-bold text-white">{albumName}</h2>
        <p className="text-stone-400">{artistName}</p>
    </div>
</div>
</div>
        
    );
}
