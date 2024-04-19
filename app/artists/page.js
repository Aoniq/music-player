import Artistlist from "../components/ArtistList";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
      <div className="flex flex-col items-center bg-stone-900 bg-opacity-50 p-4 rounded-lg w-full lg:w-1/3">
        <Navbar />
        <div className="overflow-y-scroll w-full h-[700px]">
        <Artistlist />
        </div>
      </div>
    </main>
  );
}
