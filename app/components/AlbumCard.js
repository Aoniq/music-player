import Image from "next/image";

export default function AlbumCard({ albumName, artistName, albumCover }) {
  return (
    <div className="bg-stone-800 bg-opacity-50 p-4 flex justify-between items-center w-full rounded-md">
      <div className="flex flex-row justify-between gap-4 w-full">
        <div className="flex items-center justify-center w-full">
          <Image
            width={100}
            height={100}
            src={albumCover}
            alt={albumName}
            className="rounded-md"
          />
          <h2 className="text-xl font-bold text-white">{albumName}</h2>
        </div>
        <p className="text-stone-400">{artistName}</p>
      </div>
    </div>
  );
}
