import Link from "next/link"
import Logo from "./Logo"
export default function Navbar() {
    return(
        <nav className="flex w-full justify-between items-center rounded-lg shadow-sm">
            <Logo />
            <div className="justify-end">
                <div className="flex gap-2">
                    <Link className="text-white bg-stone-800 p-2 rounded-md hover:bg-amber-500 active:bg-amber-500" href={"/"}>Songs</Link>
                    <Link className="text-white bg-stone-800 p-2 rounded-md hover:bg-amber-500 active:bg-amber-500" href={"/albums"}>Albums</Link>
                    <Link className="text-white bg-stone-800 p-2 rounded-md hover:bg-amber-500 active:bg-amber-500" href={"/artists"}>Artists</Link>
                </div>
            </div>
            <div>
                
            </div>
        </nav>
    )
}