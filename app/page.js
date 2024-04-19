import Navbar from "./components/Navbar";
import SongList from "./components/SongList";
export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full">
        <Navbar />
        <div className="overflow-y-scroll w-full h-[700px]">
        <SongList />
        </div>
      </div>
    </main>
  );
}