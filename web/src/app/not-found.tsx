import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 bg-[#FBF8FF]">
      <div className="relative flex flex-col items-center gap-6">
        <Image
          src="/azura-character.webp"
          alt="MWA"
          width={320}
          height={420}
          className="drop-shadow-[0_0_40px_rgba(81,104,255,0.12)]"
          priority
        />
        <div className="flex flex-col items-center gap-2 -mt-4">
          <span className="text-7xl font-bold text-[#5168FF]">
            404
          </span>
          <h1 className="text-xl font-semibold text-[#1A1B24]">
            This page could not be found
          </h1>
          <p className="max-w-sm text-center text-sm text-[rgba(26,27,36,0.6)]">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
