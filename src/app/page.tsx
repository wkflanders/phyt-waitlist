// pages/index.tsx
'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { CornerDownRight } from 'lucide-react';
import { inconsolata } from './fonts';
import Image from "next/image";
import PrivacyPolicy from "../../components/PrivacyPolicy";

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
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

  // Function to open the modal and update the URL
  const openModal = () => {
    setIsModalOpen(true);
    router.push(`${pathname}?modal=privacy`);
  };

  // Function to close the modal and remove the query parameter
  const closeModal = () => {
    setIsModalOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('modal');
    const query = params.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    router.push(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzt0PTC429uY0FdeiLlS5Jw9PS9gbexr49bKrd99B3wp4_Iwg8k6cGTvMKmhTngMBK85A/exec',
        {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors' // Add this to handle CORS
        }
      );

      // Since we're using no-cors, we won't get a real response status
      // Instead, assume success if we get here without an error
      setStatus('success');
      setEmail('');

    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
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

      {/* Optional dark overlay to make text more readable */}
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
          <form onSubmit={handleSubmit} className="relative h-12">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-200 border-2 border-gray-500 rounded-lg pl-4 pr-12 py-1"
              placeholder="email"
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="absolute right-0 top-0 text-gray-500 p-1 rounded-lg border-2 border-gray-400 bg-gray-200 disabled:opacity-50"
            >
              <CornerDownRight />
            </button>
          </form>
          <p className="font-inconsolata text-gray-100 tracking-wider hover:cursor-default">Be early.</p>
          {status === 'success' && (
            <p className="font-inconsolata text-green-500 tracking-wider mb-2 hover:cursor-default">Thanks for signing up!</p>
          )}
          {status === 'error' && (
            <p className="font-inconsolata text-red-500 tracking-wider mb-2 hover:cursor-default">Something went wrong. Please try again.</p>
          )}
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

      {/* Modal */}
      {isModalOpen && (
        <PrivacyPolicy isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}
