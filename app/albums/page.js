import Albumlist from "../components/AlbumList";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full">
        <Navbar />
        <div className="overflow-y-scroll w-full h-[700px]">
        <Albumlist />
        </div>
      </div>
    </main>
  );
}
