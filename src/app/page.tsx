'use client';

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { inconsolata } from './fonts';
import Image from "next/image";
import PrivacyPolicy from "../components/PrivacyPolicy";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const modal = searchParams?.get('modal');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (modal === 'privacy') {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [modal]);

  const openModal = () => {
    setIsModalOpen(true);
    router.push(`${pathname}?modal=privacy`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('modal');
    const query = params.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    router.push(url);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/IMG_0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      <div className="relative flex h-screen justify-center items-center">
        <div className="flex-grid">
          <div className="mb-8 hover:cursor-default">
            <img
              src="/PHYT.svg"
              alt="PHYT Logo"
              className="h-24 w-auto"
            />
          </div>
          <h2 className={`${inconsolata.className} text-phyt_blue leading-6 tracking-wider text-xl hover:cursor-default`}>Run.</h2>
          <h2 className={`${inconsolata.className} text-phyt_blue leading-6 tracking-wider text-xl hover:cursor-default`}>Bet.</h2>
          <h2 className={`${inconsolata.className} text-phyt_blue leading-6 tracking-wider text-xl font-semibold mb-8 hover:cursor-default`}>Earn.</h2>
          <p className="font-inconsolata text-gray-100 tracking-widest mb-3 hover:cursor-default">It&apos;ll pay to be early...</p>

          <p className="font-inconsolata text-gray-100 tracking-wider hover:cursor-default mb-3">Be early.</p>

          <p className="font-inconsolata text-lg text-gray-100 tracking-wider underline hover:cursor-default">
            <a target="_blank" href="https://mirror.xyz/phyt.eth/j_YGc7CJqjy7rrTHLkI9Zk6oN8Ok4c1W3Kjgyz26YO0">
              Read the white paper.
            </a>
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-row items-center space-x-5 py-2">
        <a target="_blank" href="https://discord.gg/bdVmWMtrZ8" rel="noopener noreferrer">
          <Image src="/discord.png" alt="discord" className="invert" width={30} height={30} />
        </a>
        <a target="_blank" href="https://x.com/Phytdotfun" rel="noopener noreferrer">
          <Image src="/x.png" alt="twitter" className="invert" width={23} height={23} />
        </a>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <button
          onClick={openModal}
          className="text-sm text-gray-200 hover:text-phyt_blue font-inconsolata"
        >
          Privacy and Terms
        </button>
      </div>

      {isModalOpen && (
        <PrivacyPolicy isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}