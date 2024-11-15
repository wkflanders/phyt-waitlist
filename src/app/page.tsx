'use client';

import { useState } from "react";

import { CornerDownRight } from 'lucide-react';
import { inconsolata } from './fonts';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

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
          <h1 className="text-8xl hollow-text font-bold tracking-tighter mb-8 hover:cursor-default">
            PHYT
          </h1>
          <h2 className={`${inconsolata.className} text-phyt_green leading-6 tracking-wider text-xl hover:cursor-default`}>Get in shape.</h2>
          <h2 className={`${inconsolata.className} text-phyt_green leading-6 tracking-wider text-xl hover:cursor-default`}>Build better habits.</h2>
          <h2 className={`${inconsolata.className} text-phyt_green leading-6 tracking-wider text-xl hover:cursor-default`}>Grow your character.</h2>
          <h2 className={`${inconsolata.className} text-phyt_green leading-6 tracking-wider text-xl font-semibold mb-8 hover:cursor-default`}>Get rewarded.</h2>
          <p className="font-inconsolata text-gray-100 tracking-widest mb-3 hover:cursor-default">It&apos;ll pay to be early...</p>
          <form onSubmit={handleSubmit} className="relative h-12">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-200 border-2 border-gray-500 rounded-lg pl-4 py-1"
              placeholder='email'
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="absolute right-0 top-0 text-gray-500 p-1 rounded-lg border-2 border-gray-500 bg-gray-200 disabled:opacity-50"
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
    </div>
  );
}
