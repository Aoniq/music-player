import Image from "next/image";
export default function Logo() {
    return (
        <div>
            <Image src="/logo.svg" alt="Music Player" width={50} height={50} />
        </div>
    );
}
